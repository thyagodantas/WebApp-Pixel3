const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var session = require("express-session");
const emailvalidator = require("email-validator");

const app = express();
app.use(session({ secret: "keyboard cat", cookie: { maxAge: 3600000 } }));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const { oauth2 } = require("googleapis/build/src/apis/oauth2/index.js");

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "", // O host do banco. Ex: localhost
  user: "", // Um usuário do banco. Ex: user
  password: "", // A senha do usuário. Ex: user123
  database: "", // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

connection.connect((err) => {
  if (err) {
    console.log("Erro connecting to database...", err);
    return;
  }
  console.log("Connection established!");
});

app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use("/css", express.static(path.join(__dirname, "/Sistema/css")));
app.use("/images", express.static(path.join(__dirname, "/Sistema/images")));
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use("/js", express.static(path.join(__dirname, "/Sistema/js")));
app.use("/lottie", express.static(path.join(__dirname, "/Sistema/lottie")));
app.set("views", path.join(__dirname, "/Views"));
app.use("includes", express.static(path.join(__dirname, "/Views/includes")));

app.listen(3000, () => {
  console.log("Servidor iniciado!");
});

app.get("/", (req, res) => {
  // ROTAS SIMPLES
  const clientesQuery = "SELECT imagem, url FROM clientes ORDER BY id";
  const avaliacoesQuery =
    "SELECT usuario, site, textodaavaliacao FROM avaliacoes ORDER BY id DESC";

  connection.query(clientesQuery, (err, clientes) => {
    if (err) throw err;

    clientes = clientes.map((val) => {
      return {
        imagem: val.imagem.toString("base64"),
        url: val.url,
      };
    });

    connection.query(avaliacoesQuery, (err, avaliacoes) => {
      if (err) throw err;

      avaliacoes = avaliacoes.map((val) => {
        return {
          usuario: val.usuario,
          site: val.site,
          textodaavaliacao: val.textodaavaliacao,
        };
      });

      res.render("index", {
        clientes: clientes,
        avaliacoes: avaliacoes,
      });
    });
  });
});

app.get("/site-expresso", (req, res) => {
  const portifolioQuery =
    "SELECT imagem, categoria, nome FROM portifolio ORDER BY id DESC";

  connection.query(portifolioQuery, (err, portifolio) => {
    if (err) throw err;

    portifolio = portifolio.map((val) => {
      return {
        imagem: val.imagem.toString("base64"),
        categoria: val.categoria,
        nome: val.nome,
      };
    });

    res.render("expresso", { portifolio: portifolio });
  });
});

app.post("/site-expresso", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const telefone = req.body.telefone;
  const categoria = req.body.categoria;
  const empresa = req.body.empresa;
  const message = req.body.message;

  if (
    name == "" ||
    email == "" ||
    telefone == "" ||
    categoria == "" ||
    empresa == "" ||
    message == ""
  ) {
    res.status(400).send("Algum campo está vazio.");
    return;
  } else if (!emailvalidator.validate(email)) {
    res.status(400).send("Endereço de e-mail inválido.");
    return;
  } else {
    const contatoQuery = "INSERT INTO contato VALUES (null, ?, ?, ?, ?, ?, ?)";
    const contatoValues = [name, email, telefone, categoria, empresa, message];

    connection.query(contatoQuery, contatoValues, (error, results) => {
      if (error) {
        console.log(
          "Erro ao inserir dados do contato no banco de dados:",
          error
        );
        res
          .status(500)
          .send("Erro ao inserir dados do contato no banco de dados");
      } else {
        console.log(
          "Dados do contato inseridos com sucesso no banco de dados!"
        );
        res
          .status(200)
          .send("Agradecemos seu contato! Falaremos com você em breve.");
      }
    });
  }
});

app.post("/", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const telefone = req.body.telefone;
  const categoria = req.body.categoria;
  const empresa = req.body.empresa;
  const message = req.body.message;

  if (
    name == "" ||
    email == "" ||
    telefone == "" ||
    categoria == "" ||
    empresa == "" ||
    message == ""
  ) {
    res.status(400).send("Algum campo está vazio.");
    return;
  } else if (!emailvalidator.validate(email)) {
    res.status(400).send("Endereço de e-mail inválido.");
    return;
  } else {
    const contatoQuery = "INSERT INTO contato VALUES (null, ?, ?, ?, ?, ?, ?)";
    const contatoValues = [name, email, telefone, categoria, empresa, message];

    connection.query(contatoQuery, contatoValues, (error, results) => {
      if (error) {
        console.log(
          "Erro ao inserir dados do contato no banco de dados:",
          error
        );
        res
          .status(500)
          .send("Erro ao inserir dados do contato no banco de dados");
      } else {
        console.log(
          "Dados do contato inseridos com sucesso no banco de dados!"
        );
        res
          .status(200)
          .send("Agradecemos seu contato! Falaremos com você em breve.");
      }
    });
  }
});
