import Link from 'next/link';

const Header = () => {
  return (
    <section>
      <Link href='/'>
        <a href='' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ margin: '1rem' }}>Facebook</div>
            <div style={{ margin: '1rem' }}>Instagran</div>
            <div style={{ margin: '1rem' }}>Linkedin</div>
            <div style={{ margin: '1rem' }}>Youtube</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ margin: '1rem' }}>meajude@amparosaude.com</div>
            <div style={{ margin: '1rem' }}>4020-1766</div>
            <div style={{ margin: '1rem' }}>(11) 4020-1766</div>
          </div>
        </a>
      </Link>
    </section>
  );
};

export default Header;
