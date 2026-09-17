"""Check final committed Git blobs against the local semantic-upgrade manifest."""
import hashlib
import json
import subprocess
from pathlib import Path

root = Path(__file__).resolve().parents[1]
record = json.loads((root / "evidence/semantic-upgrade.json").read_text(encoding="utf-8"))
for section in ("sourceSHA256", "evidenceSHA256"):
    for name, expected in record[section].items():
        data = subprocess.check_output(["git", "show", "HEAD:" + name], cwd=root)
        if hashlib.sha256(data).hexdigest() != expected:
            raise ValueError("Committed Git blob mismatch: " + name)
print(len(record["sourceSHA256"]), "source and",
      len(record["evidenceSHA256"]), "evidence Git blobs verified")
