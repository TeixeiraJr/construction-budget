const hbs = require('handlebars')

exports.template = hbs.compile(
    `<html>
        <head>
        </head>
        <body>
            <h1>E-mail para redefinição de senha</h1>
            <p>Você está cadastrado na plataforma Collabits! Acesse esse link para redefinir sua senha:</p>
            <a href="https://app.dev.collabits.com/forgot-password-code/{{forgot}}">Link de acesso!<a>
            <br>
        </body>
    </html>`
)
