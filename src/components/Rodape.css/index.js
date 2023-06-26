import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='footer'>
            <section>
                <ul>
                <li><a href='https://github.com/alanserafim' target='blank'><img src='/img/fb.png' alt='icone do Facebook'></img></a></li>
                <li><a href='https://github.com/alanserafim' target='blank'><img src='/img/tw.png' alt='icone do Twitter'></img></a></li>
                <li><a href='https://github.com/alanserafim' target='blank'><img src='/img/ig.png' alt='icone do Instagram'></img></a></li>
                </ul>
            </section>
            <section>
                <img src='/img/logo.png' alt='Logo da Organo'></img>
            </section>
            <section><p>Desenvolvido por Alan Serafim</p></section>
        </footer>
    )
}

export default Rodape