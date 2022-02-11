export default function () {
  return async () => {
    console.error(`
Dear user,

this schematic has been renamed to @angular-architects/sam4sc.
The GitHub repository remains the same: https://github.com/rainerhahnekamp/sam4sc

Please update via: "npm install -D @angular-architects/sam4sc".

Then run the generators like "ng generate @angular-architects/sam4sc:scam"

All the best,
Rainer
`);
  };
}
