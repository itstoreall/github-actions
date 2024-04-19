import os
import openai

def upload_files():
    openai.api_key = os.environ.get("OPENAI_API_KEY")
    build_dir = "build"

    for file in os.listdir(build_dir):
        file_path = os.path.join(build_dir, file)
        if os.path.isfile(file_path):
            with open(file_path, "rb") as f:
                openai.File.create(
                    file=f,
                    purpose="code_review"
                )
            print(f"Uploaded file: {file}")

if __name__ == "__main__":
    upload_files()