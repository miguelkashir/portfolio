import { useEffect } from 'react';
import { headerData } from '../data/headerData';

interface HeaderProps {
  isScrolled: boolean;
}

const { name, role } = headerData;

export const Header = ({ isScrolled }: HeaderProps) => {
  useEffect(() => {
    console.log(isScrolled);
  });

  return (
    <div>
      <h1>{name}</h1>
      <h2>{role}</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet
        bibendum mi, ac semper neque. In elementum sem at vestibulum interdum.
        Sed rutrum ligula quis arcu maximus, a posuere metus porttitor. In
        viverra venenatis aliquam. Sed imperdiet a diam eget dapibus. Morbi eget
        neque id tellus pulvinar dapibus. Etiam in sodales purus. Ut sodales
        pretium ornare. Cras vulputate urna elit. Proin at sapien varius, cursus
        risus a, ullamcorper nulla. Donec efficitur lacus id risus mattis
        dictum. Nam eget massa a risus mattis tempor quis volutpat sem. Fusce
        sodales eu magna vel commodo. Curabitur faucibus odio nec ligula
        posuere, in sollicitudin mi rutrum. Morbi vehicula semper nisi, quis
        efficitur elit efficitur vel. Vestibulum sit amet rhoncus ipsum. Nullam
        magna enim, interdum quis nunc a, maximus luctus elit. Maecenas vehicula
        enim auctor sagittis porttitor. Vestibulum non mi faucibus, vulputate
        mauris et, fringilla mauris. Ut et malesuada velit. Praesent a eros
        congue, facilisis dui id, posuere turpis. Proin ultrices magna vel
        mauris egestas, et auctor metus molestie. Aliquam ultricies pellentesque
        dolor, sed tincidunt lacus facilisis vel. Sed erat eros, interdum sed
        orci ac, placerat maximus diam. Duis tempus nulla sit amet egestas
        rutrum. Nulla nec consequat sem. Aenean vitae scelerisque dui. Morbi
        faucibus vestibulum nisl, in ultricies ex venenatis vitae. Nam eget
        scelerisque nunc. Sed imperdiet est libero, non lacinia augue mattis
        vel. Morbi ultricies fringilla nunc non pretium. Phasellus dui enim,
        bibendum vitae magna rhoncus, mattis vestibulum nunc. Praesent auctor
        eleifend ipsum eu dictum. Ut pellentesque diam sit amet sollicitudin
        rutrum. Suspendisse eros leo, ullamcorper ac urna ut, fringilla
        pellentesque sapien. Etiam euismod quam eu bibendum luctus. Nullam quis
        ultricies massa. Sed blandit, magna ut condimentum suscipit, nulla nulla
        mollis neque, et accumsan nibh nulla sed erat. Donec at eros imperdiet,
        dignissim erat ut, volutpat ex. Praesent et aliquet purus. Suspendisse
        posuere commodo elit, nec volutpat felis accumsan in. Sed vitae rutrum
        leo. Ut id dignissim quam. Ut lobortis ullamcorper nibh nec dapibus.
        Vestibulum ut pretium orci. Suspendisse sed mollis elit. Nulla pharetra
        id erat in viverra. Pellentesque vel ipsum dui. Sed rhoncus pretium
        augue eu consectetur. Proin dapibus libero id imperdiet ultrices. Proin
        vel molestie dolor, ac pellentesque ante. Vestibulum eu aliquet metus.
        Fusce quis dolor non odio egestas semper. Etiam congue suscipit lorem at
        gravida. Phasellus lorem felis, dictum quis massa ac, tincidunt
        imperdiet urna. In tincidunt felis non euismod venenatis. Integer sed
        imperdiet dolor. Mauris efficitur nulla at mattis suscipit. Sed placerat
        justo ac felis viverra tincidunt. Duis tincidunt nisi sem, et tempor
        neque convallis non. Aenean convallis eu eros non elementum. Etiam felis
        magna, facilisis eget massa id, aliquam fermentum tellus. Maecenas est
        erat, facilisis nec bibendum in, dictum sed ipsum. Nulla et orci vitae
        velit imperdiet venenatis elementum in ante. Etiam non egestas enim, id
        vulputate est. Morbi nec ante et odio commodo vehicula quis a ipsum.
        Nullam id diam molestie, rutrum neque at, scelerisque ipsum. Sed
        tristique libero id iaculis efficitur. Proin mattis nibh ex, ac rhoncus
        urna vehicula a. Fusce venenatis mauris non metus maximus porta.
        Phasellus lacinia est eget ultrices faucibus. In sed ipsum id metus
        efficitur tincidunt sed at est. Sed porttitor ullamcorper turpis at
        tempor. Nulla ornare egestas nunc sed finibus. Pellentesque eu mi et est
        tempus consectetur. Phasellus efficitur mi eget mattis mollis. Integer
        luctus neque in libero interdum mollis. Donec non nulla non quam
        tincidunt rutrum. Integer molestie, velit nec imperdiet eleifend, risus
        erat elementum magna, quis aliquet justo lectus a sapien. Donec sit amet
        enim pellentesque, dapibus velit et, condimentum est. In hac habitasse
        platea dictumst. Nullam scelerisque tempus metus, ut fermentum metus
        placerat ac. Sed eleifend viverra est tincidunt gravida. Maecenas cursus
        nulla lectus, eu sagittis ipsum rhoncus vitae. Etiam congue nec ligula a
        laoreet. Ut ut malesuada lorem. Praesent ut augue at risus sollicitudin
        ultrices. In lacinia nisi vitae nulla posuere, vitae eleifend quam
        aliquet. Aliquam eu suscipit tortor, sed pharetra dui. Integer luctus
        risus diam, non efficitur lorem rutrum sit amet. Suspendisse ipsum
        lectus, posuere commodo justo in, lacinia egestas sapien. Suspendisse
        quis sem id nisl ultrices gravida. Curabitur cursus posuere malesuada.
        Sed vitae lacus mauris. Phasellus quis mollis augue. Sed luctus accumsan
        ex at aliquet. Maecenas consequat ultrices lectus a sodales. Sed eu dui
        volutpat, ultrices justo sit amet, euismod lorem. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Aenean viverra volutpat nisi sit amet maximus. Mauris accumsan tincidunt
        ex at lacinia. Fusce molestie ligula orci, pretium imperdiet tortor
        volutpat et. Aenean finibus consequat magna, ac commodo augue pulvinar
        eget. Ut mattis, odio in aliquam maximus, velit arcu iaculis turpis, nec
        varius turpis augue tristique ante. Donec sit amet hendrerit turpis.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Nam in placerat lorem. Sed dui metus, euismod eget velit
        nec, facilisis pulvinar sapien. Phasellus ullamcorper ultricies eros.
        Donec leo libero, porta at lobortis eu, placerat sit amet augue.
        Curabitur commodo arcu quis imperdiet pulvinar. Fusce ultricies semper
        magna, vel consectetur massa tristique et. Morbi id imperdiet tortor,
        sed blandit risus. Nunc vel ante suscipit, scelerisque nisi at, porta
        nisl. Mauris vel aliquet ligula, ac dignissim mauris. Pellentesque
        ultricies metus vel porttitor semper. Sed lacinia lobortis metus id
        commodo. Praesent leo lorem, suscipit non purus id, porttitor fringilla
        nibh. Integer bibendum ante vel neque euismod tincidunt. Ut egestas
        justo dapibus, tristique diam at, egestas ex. Morbi pellentesque feugiat
        arcu nec laoreet. Nulla elementum augue eu mi egestas mollis. In dictum,
        orci at mattis consequat, ipsum lectus porta est, nec hendrerit lorem
        diam non elit. Cras tempor elementum magna, vitae venenatis sem egestas
        nec. Maecenas faucibus ipsum in egestas mollis. Vivamus varius lacus nec
        vehicula eleifend. Donec molestie purus vitae velit consequat cursus.
        Curabitur sit amet dolor convallis, consectetur nibh nec, rhoncus dolor.
        Etiam tempor gravida ligula, at dapibus arcu congue eget. Phasellus et
        ligula suscipit, sodales mauris sit amet, mollis leo. Sed varius
        venenatis viverra. Quisque sit amet massa venenatis lectus laoreet
        condimentum. Phasellus ullamcorper eget purus ac vestibulum. Nullam
        gravida nunc magna, pretium tristique nulla molestie in. Fusce eget
        libero purus. Praesent sed nulla urna. Etiam sit amet enim tincidunt,
        finibus lorem sed, commodo ipsum. Mauris et hendrerit magna, ut laoreet
        velit. Aenean porta viverra laoreet. Maecenas sollicitudin malesuada
        diam. Quisque auctor neque urna, id condimentum odio pellentesque a. Nam
        vulputate sed quam vehicula mollis. Etiam eu placerat purus. Ut ac lorem
        id leo bibendum efficitur. Praesent ac semper magna. Pellentesque
        eleifend et magna vitae tincidunt. Nullam quis metus eu risus dictum
        vestibulum vel in neque. Praesent enim sapien, molestie eget nisl eget,
        aliquam venenatis justo. Vivamus vestibulum massa vel commodo aliquet.
        Vivamus tempor, eros tincidunt lobortis venenatis, lacus diam ultrices
        ex, ut egestas nisi sapien nec dui. Maecenas sit amet massa lorem. In in
        ante dui. In non condimentum quam. Phasellus nisi libero, sagittis
        vehicula commodo sit amet, gravida eget velit. Suspendisse potenti.
        Aenean justo leo, consequat in imperdiet quis, vulputate vitae metus.
        Curabitur et ligula nulla. Praesent sit amet erat ullamcorper, blandit
        justo nec, sagittis lacus. Nunc massa diam, vestibulum nec lacus ac,
        lacinia tempor lectus. Praesent egestas imperdiet nisi, vitae tempus
        lacus dignissim eu. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. In vel placerat diam, ac mattis
        urna. Sed luctus magna in sem aliquet, et mollis diam semper. Ut ornare
        nulla vel pharetra mattis. Curabitur aliquam orci vel maximus egestas.
        Sed pellentesque vel risus ac consectetur. Vivamus placerat dapibus
        mauris, sit amet lacinia erat mollis sed. Vivamus magna mauris,
        dignissim at ligula ac, imperdiet bibendum tortor. Fusce ac sagittis
        tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Phasellus hendrerit dignissim nisi at vehicula. Aliquam condimentum
        purus eget nisi blandit, eget pulvinar tellus tristique. Suspendisse
        aliquet tincidunt neque, a laoreet lacus tristique non. Ut feugiat
        feugiat urna molestie condimentum. Vivamus non iaculis lorem, id auctor
        eros. Mauris non ipsum at est pretium vehicula euismod quis justo. Sed
        at elementum justo, fermentum cursus nulla. Vivamus eu eros at risus
        condimentum dignissim. Etiam efficitur eu dui nec sodales. Praesent
        fermentum congue est quis molestie. Integer rutrum nulla vehicula neque
        tristique, non dictum ex faucibus. Aenean non justo eget dui pretium
        placerat id nec dui. Mauris in posuere justo. Nunc venenatis facilisis
        mauris, at eleifend massa bibendum tristique. Donec suscipit libero quis
        metus ultrices eleifend. Cras varius volutpat magna, at pretium justo
        tristique vitae. Aliquam eros leo, blandit id tellus quis, tincidunt
        suscipit eros. Sed varius arcu et dolor pellentesque laoreet eu in erat.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Phasellus ac tincidunt felis. Mauris aliquet, nisi vel
        consectetur iaculis, libero felis finibus ante, a euismod purus enim ac
        nibh. Suspendisse at ornare enim. In turpis augue, eleifend at congue
        et, fringilla a velit. Nam sed dolor porta, efficitur elit a, tristique
        turpis. Donec dictum ornare felis sit amet porta. Aenean tincidunt
        ligula et quam tempus, at dapibus dui consequat. Nulla dignissim eu odio
        et pellentesque. Ut suscipit aliquam finibus. Pellentesque semper sed
        nunc ac laoreet. Vestibulum diam arcu, cursus id pretium non, maximus
        sit amet est. Maecenas scelerisque ex non tortor sagittis, ut mattis
        odio malesuada. Donec consequat, ex quis mattis ultrices, turpis est
        volutpat ipsum, vitae sodales dui felis vel metus. Nulla facilisi.
        Aenean ut nunc commodo, faucibus magna a, placerat urna. Pellentesque
        vitae ante tellus. Duis sodales tincidunt nisl, vel sollicitudin justo
        sollicitudin sit amet. Proin at metus commodo urna imperdiet blandit a
        at turpis. Sed at dignissim lorem. Duis a rhoncus mi. Fusce commodo sed
        nibh vel condimentum. In hac habitasse platea dictumst. Pellentesque
        posuere eu lorem in lacinia. Vivamus egestas volutpat tellus sed
        iaculis. Nunc eget nisl mauris. Maecenas vitae urna id velit feugiat
        blandit quis at diam. In sollicitudin molestie nibh ac viverra. Etiam
        vel neque vitae nunc accumsan eleifend id sit amet lectus. Sed tempus
        ipsum eget nunc faucibus vulputate. Duis pellentesque vel massa nec
        consequat. Quisque sollicitudin maximus placerat. Mauris molestie eros
        ut est molestie, at sodales mauris convallis. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Curabitur leo nisi, fringilla sit amet faucibus porttitor, sodales at
        risus. Nunc at luctus libero, vitae pellentesque tortor. Nunc vel
        iaculis velit. Fusce ornare faucibus dignissim. Morbi interdum varius
        tincidunt. Proin rhoncus varius augue, non posuere ligula faucibus vel.
        Nunc lacus lorem, dictum sed tellus eu, facilisis tempus arcu.
        Vestibulum finibus mattis ipsum. Sed et rhoncus lacus, ut faucibus
        sapien. Integer suscipit tincidunt orci, quis posuere est luctus id.
        Curabitur dignissim massa vulputate ante pulvinar elementum. Aliquam
        facilisis massa id augue sollicitudin, at tincidunt nisl ullamcorper.
        Donec consectetur eget ipsum at aliquam. Pellentesque vel hendrerit
        tellus, id porta urna. Nunc ut sem commodo, mollis nisi non, feugiat
        eros. Etiam at ligula quis quam maximus fermentum a eu enim. Fusce
        commodo eros non ligula lacinia, non aliquet mauris efficitur. Nunc
        ullamcorper lorem at nisl iaculis egestas. Nam aliquet elit in lorem
        dictum eleifend. Donec sapien massa, finibus vitae enim at, scelerisque
        vulputate dui. Praesent venenatis condimentum mi, id cursus urna. Cras
        mollis feugiat elit sed condimentum. Sed in urna arcu. Cras vitae
        aliquet enim. Etiam non libero risus. Praesent non nisi tincidunt orci
        commodo auctor sit amet in elit. Sed ut lacinia risus. Donec et enim
        eget nulla varius fermentum. Duis vel pretium mi. Praesent vestibulum,
        orci id pellentesque rutrum, lectus libero efficitur ante, vel mollis
        ante lectus eget ligula.
      </p>
    </div>
  );
};
