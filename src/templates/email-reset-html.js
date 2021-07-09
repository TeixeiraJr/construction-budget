const hbs = require('handlebars')

exports.template = hbs.compile(
    `<html>
        <head>
        </head>
        <body>
            <h1>E-mail para redefinição de senha</h1>
            <p>Clique no Link abaixo para redefinir sua senha da plataforma Construction budgets: </p>
            <a href="https://constructionbudget.com/forgot-password-code/{{forgot}}">Link de acesso!<a>
            <br>
        </body>
    </html>`
)
