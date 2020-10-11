set -eu # 🇪🇺

cd site || exit 1

npm install
npm run build

rm -rf ../public || echo ../"public/ already deleted."
cp -r build ../public
