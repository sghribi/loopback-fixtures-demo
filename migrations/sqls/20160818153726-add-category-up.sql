CREATE TABLE "category" (
  id SERIAL PRIMARY KEY,
  name VARCHAR(256) NOT NULL,
  parentId INTEGER REFERENCES "category"(id) ON DELETE CASCADE
);
