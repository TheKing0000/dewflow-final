Exit out of .map() when does not mean expectations

if (item.route === "/profile") {
if (userId) item.route = `${item.route}/${userId}`;
else return null;
}
