program rpg;
uses
	crt;
const 
	ile_zdarzen=14;
type
	r_zdarzenia = { wrog, nieznajomy, przedmiot, nic };
	r_nieznajomego = { zlodziej, dobry_d, zly_d, czarodziej };
	r_przedmiotu = { miecz, zbroje, eliksir, mieso, zloto, trucizna };

zdarzenie = record
				opis: string;
				prawdo: integer;
				case rodzaj: r_zdarzenia of
								wrog: { sila: integer };
								przedmiot: { rzecz: r_przedmiotu };
								nieznajomy: { kto: r_nieznajomego };
				end;
const 
	hero: bohater = { wytrzymalosc: 4; sila: 4; bagaz: []; zloto: 0};
	swiat: array[1..ile_zdarzen] of zdarzenie = (
	(opis:'nic'; prawdo:40; rodzaj:nic),
	(opis:'oblesny gnom'; prawdo:10; rodzaj:wrog; sila:2),
	(opis:'wielki smok'; prawdo:5; rodzaj:wrog; sila:7)
	);

var
	ile: integer;
	klawisz: char;

procedure opisz_bohatera;
var	przed: r_przedmiotu;
begin
	clrscr;
	writeln('wytrzymalosc: ', hero.wytrzymalosc, 'sila: ', hero.sila, 'zloto: ', hero.zloto);
	write('bagaz: ');
	for przed:=miecz to trucizna do
		if przed in hero.bagaz then
			write(nazwa_p[przed],' ');
	writeln;
	writeln('*******************************');
end;

procedure spotkaj_wroga( kto: zdarzenie );
var
	sila: integer;
	pieniadz: integer;
	ekwipunek: integer;
	decyz: char;
	walka: boolean;
begin
	ekwipunek:=0;
	sila:=random(6)+kto.sila;
	writeln("Zza krzkow wyskoczyl", kto.opis, " o sile ", sila);
	writeln("W]alczysz, U]ciekasz, N]egocjujesz?");
	decyz:=upcas(readkey);
	walka:=true;
	if decyz="U" then
		begin
		end
		else
			writeln("Zostales zlapany");
		end
		else
		if decyz="N" then
			begin
			end
		
		if walka then
			begin
			end
			else
				begin
				end
			end;
end;

procedure spotkaj_nieznajomego(ktos: zdarzenie);
begin
end;

procedure znajdz_przedmiot(co: zdarzenie);
var	
	los: integer;
begin
	writeln('znalazles ', co.opis);
	los:=random(20)+20;
	
	case co.rzecz of
		miecz: hero.bagaz:= hero.bagaz[miecz];
		zbroja: hero.bagaz:= hero.bagaz[zbroja];
		eliksir: hero.wytrzymalosc:=hero.wytrzymalosc+1;
		mieso: hero.sila:=hero.sila+1;
		zloto: hero.zloto:=hero.zloto+1;
		trucizna: 
			begin
				hero.wytrzymalosc:= hero.wytrzymalosc div 2;
				hero.sila:= hero.sila div 2;
			end;
	end;
end;

begin
	randomize;
	opisz_bohatera;
	while hero.wytrzymalosc>0 do
		begin
		end;
	writeln('Koniec gry');
	if hero.zloto>1000 then
		writeln('wygrales');
	klawisz:=readkey;
end.