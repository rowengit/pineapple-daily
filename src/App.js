import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/zh";

dayjs.locale("zh");

const defColor = {
	yellow: "#ffff80"
};

const Header = styled.header`
	display: grid;
	background-color: ${defColor.yellow};
	grid-template-areas: "title" "date" "weather";
	grid-row-gap: 2rem;

	h1 {
		font-family: "DM Serif Display", serif;
		font-size: 2rem;
		grid: title;
		margin: 0 auto;
	}

	.date {
		grid: date;
		margin: 0 auto;
		font-size: 1rem;
	}

	.weather {
		grid: weather;
		margin: 0 auto;
		text-align: center;
		font-size: 1rem;
		p {
			line-height: 1.5rem;
		}
	}
`;

const Main = styled.main`
	margin: 0 auto;
	display: grid;
	grid-template-areas: "top" "bottom";

	max-width: 1440px;

	h2 {
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 500;
	}

	h3 {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 500;
	}

	.top {
		grid: "top";
		margin: 1rem 0;
		width: 100%;
		display: grid;
		grid-template-columns: 6fr 4fr;
		grid-template-areas: "left" "right";

		img {
			max-width: 100%;
			max-height: 100%;
			margin: 1rem 0;
		}

		article {
			margin: 2rem;
			padding-bottom: 2rem;
			:not(:last-child) {
				border-bottom: 1px solid;
			}

			p {
				padding-bottom: 1rem;
				line-height: 1.5rem;

				overflow: hidden;
				text-overflow: ellipsis;
				max-width: 75ch;
			}
		}

		.left {
			border-right: 1px solid;
			grid: left;
		}

		.right {
			grid: right;
		}
	}

	.bottom {
		display: flex;
		border-top: 1px solid;

		article {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			margin: 2rem;
			padding-bottom: 2rem;

			p {
				padding: 1rem 0;
				line-height: 1.5rem;
			}
		}
	}

	@media (max-width: 640px) {
		.top {
			display: block;

			.right {
				display: none;
			}

			.left {
				border-right: none;
			}
		}

		.bottom {
			display: block;

			article {
				display: flex;
				justify-content: space-between;

				a {
					text-align: left;
				}

				p {
					display: none;
				}
			}
		}
	}
`;

const Footer = styled.footer`
	display: flex;
	justify-content: space-between;
	background-color: ${defColor.yellow};
	line-height: 3rem;
	padding: 0 1rem;

	span {
		font-size: 12px;
	}
	h3 {
		font-size: 1rem;
		font-weight: 700;
		font-family: "DM Serif Display", serif;
	}
`;

function App() {
	const today = dayjs().locale("zh").format("YYYY年M月DD日 dddd");
	const title = "Pineapple Daily";
	return (
		<div className="App">
			<Header>
				<h1>{title}</h1>
				<div className="date">{today}</div>
				<div className="weather">
					<p>現在溫度: 0℃</p>
					<p>今日最低溫: 0℃ 最高溫: 0℃</p>
				</div>
			</Header>
			<Main>
				<div className="top">
					<div className="left">
						<Post
							title="鏡電視申照越來越勁爆 裴偉稱「總統的旨意」音檔全曝光"
							imgUrl={
								"https://s.yimg.com/ny/api/res/1.2/4HngKeYmwgoe49FkwBBmUA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTUwNjtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/M_sSuqdYOWMGw1.QZjmIxg--~B/aD00NTI7dz04NTg7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/zh-tw/ctwant_com_582/34b2910c929662830d751b59e6135ea9"
							}
							desc="[周刊王CTWANT] 鏡電視新聞台於今年1月19日取得執照，傳言背後有各政治勢力介入，更有複雜的政商媒關係。事實上，今年3月本刊就曾報導，知情人士表示，鏡電視創辦人裴偉常打電話和總統交換意見；當時總統府回應，否認有「熱線總統」一事"
							link="https://tw.news.yahoo.com/%E9%8F%A1%E9%9B%BB%E8%A6%96%E7%94%B3%E7%85%A7%E8%B6%8A%E4%BE%86%E8%B6%8A%E5%8B%81%E7%88%86-%E8%A3%B4%E5%81%89%E7%A8%B1-%E7%B8%BD%E7%B5%B1%E7%9A%84%E6%97%A8%E6%84%8F-%E9%9F%B3%E6%AA%94%E5%85%A8%E6%9B%9D%E5%85%89-062800132.html"
						/>
						<Post
							title="民視董事會今下午決議 取消周玉蔻辣新聞節目在53新聞台聯播"
							imgUrl={
								"https://s.yimg.com/ny/api/res/1.2/GxGKtN0nMrepHJEtbuuQig--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY3MztjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/52gsDt53WF.lT_49b8lFgQ--~B/aD05NTg7dz0xMzY2O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/ko/newtalk.tw/9d49e47a58d890cb38f0302ace315ed3"
							}
							desc="[新頭殼newtalk] 資深媒體人周玉蔻最近透過辣新聞電視節目爆料，國民黨台北市長參選人蔣萬安父親蔣孝嚴20多年前緋聞，反遭被告，26日在台北地檢署前與國民黨市議員王鴻薇互嗆。民視今日下午召開常務董事會決議，辣新聞政論節目引發各方爭議，為避免爭議事態繼續擴大"
							link="https://tw.news.yahoo.com/%E6%B0%91%E8%A6%96%E8%91%A3%E4%BA%8B%E6%9C%83%E4%BB%8A%E4%B8%8B%E5%8D%88%E6%B1%BA%E8%AD%B0-%E5%8F%96%E6%B6%88%E5%91%A8%E7%8E%89%E8%94%BB%E8%BE%A3%E6%96%B0%E8%81%9E%E7%AF%80%E7%9B%AE%E5%9C%A852%E6%96%B0%E8%81%9E%E5%8F%B0%E8%81%AF%E6%92%AD-100519929.html"
						/>
						<Post
							title="蝦皮裁員潮燒到台灣 官方證實組織調整"
							imgUrl={
								"https://s.yimg.com/ny/api/res/1.2/o0SIa4BCAuUwC7mz7ki4hg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2021-08/514a4660-fc1f-11eb-949b-12e182a301b8"
							}
							desc="蝦皮表示，台灣蝦皮購物營運穩健，這次組織調整不影響營運，不便透露受到組織調整影響的人數。目前蝦皮美食外送已停止服務，主因更聚焦電商業務，進行資源優化與整合。蝦皮全球裁員潮持續擴大，已波及中國大陸。據界面新聞報導，蝦皮中國於19日舉行全員大會，宣布將削減部分職務，會議前後僅7分鐘。被裁的員工可拿到N+2（年資+2）的資遣費。"
							link="https://tw.news.yahoo.com/%E8%9D%A6%E7%9A%AE%E8%A3%81%E5%93%A1%E6%BD%AE%E7%87%92%E5%88%B0%E5%8F%B0%E7%81%A3-%E5%AE%98%E6%96%B9%E8%AD%89%E5%AF%A6%E7%B5%84%E7%B9%94%E8%AA%BF%E6%95%B4-105648962.html"
						/>
						<Post
							title="貓踏入金魚缸後迅速融化！模樣神秘"
							imgUrl={
								"https://s.yimg.com/ny/api/res/1.2/j61v1xcnUxkFhsoCF3KB8A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/Hv.2r31KW7o5ci4_ahpTfQ--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/petsmao_nownews_707/d2cd4363bf1676aee2af629d6962a187"
							}
							desc="雖然常常聽到「貓是液體」的說法，但每次看到還是很震撼！日本網友家養有三隻貓咪，時常在Youtube上分享關於牠們的生活片段。今天要介紹的主角是臉圓圓的「丸子（まる）」，牠將挑戰躺入小小的金魚缸中，不要看牠的名字和身材就覺得不可能，牠踏入缸內瞬間就「融化」了呢！"
							link="https://tw.news.yahoo.com/%E8%B2%93%E8%B8%8F%E5%85%A5%E9%87%91%E9%AD%9A%E7%BC%B8%E5%BE%8C%E8%BF%85%E9%80%9F%E8%9E%8D%E5%8C%96-%E6%A8%A1%E6%A8%A3%E7%A5%9E%E7%A7%98-082310245.html"
						/>
					</div>

					<div className="right">
						<Post
							title="護國神山股價快破底 小股東人數卻持續創新高 台積電買點到了嗎？"
							imgUrl="https://s.yimg.com/ny/api/res/1.2/x9wouvLvBylIuOgNsV1exg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/Sl8Rvt.ow5NqahN3dxY9MA--~B/aD0xMzQyO3c9MjAxNDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/ko/cmmedia.com.tw/60354aa258f6cfffeca587d1bcb55c51"
							desc="隨著美股在上周五大跌，道瓊指數跌破3萬點、創近2年新低，台股26日開低走低，開盤即摜破萬四，盤中持續走低，接近尾盤時指數最低一度來到13743點，終場收在13778點，大跌340點，成交量僅2178.13億。統計三大法人買賣超，外資賣超78.45億元，投信買超22.66億元，自營商賣超31.76億元，三大法人賣超87.55億元。"
							link="https://tw.news.yahoo.com/%E8%AD%B7%E5%9C%8B%E7%A5%9E%E5%B1%B1%E8%82%A1%E5%83%B9%E5%BF%AB%E7%A0%B4%E5%BA%95-%E5%B0%8F%E8%82%A1%E6%9D%B1%E4%BA%BA%E6%95%B8%E5%8D%BB%E6%8C%81%E7%BA%8C%E5%89%B5%E6%96%B0%E9%AB%98-%E5%8F%B0%E7%A9%8D%E9%9B%BB%E8%B2%B7%E9%BB%9E%E5%88%B0%E4%BA%86%E5%97%8E-000246878.html"
						/>
						<Post
							title="喬治王子學壞了？ 被爆用「我爸國王」威脅同學 王室專家嘆：2年前還是乖寶寶"
							imgUrl="https://s.yimg.com/ny/api/res/1.2/Tf1XXe6uq8EeZR78DGb_GA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTUwNjtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/0825JkWo3JORl2Hsb1a6uQ--~B/aD00NTI7dz04NTg7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/ko/ctwant_com_582/ae018e1cabbd146af3aa174fb6ad8b8c"
							desc="[周刊王CTWANT] 英國威爾斯親王威廉的長子喬治王子被爆用王室身分威脅同學。王室專家妮可（Katie Nicholl）聲稱年僅9歲的喬治王子不僅清楚自己的王室責任，還會用身分脅迫同學聽話：「我爸會成為國王，你最好小心點。」"
							link="https://tw.news.yahoo.com/%E5%96%AC%E6%B2%BB%E7%8E%8B%E5%AD%90%E5%AD%B8%E5%A3%9E%E4%BA%86-%E8%A2%AB%E7%88%86%E7%94%A8-%E6%88%91%E7%88%B8%E5%9C%8B%E7%8E%8B-%E5%A8%81%E8%84%85%E5%90%8C%E5%AD%B8-%E7%8E%8B%E5%AE%A4%E5%B0%88%E5%AE%B6%E5%98%86-124946142.html"
						/>
						<Post
							title="韓愈文化祭 昌黎祠個人化郵票過爐"
							imgUrl="https://s.yimg.com/ny/api/res/1.2/5DdhkDJvLA5JfWBROGrGJw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU2MztjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/LssuD17pJVuqO8e6vqtY2Q--~B/aD02MDA7dz0xMDI0O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/ko/cdns.com.tw/92e13fb368bc1cbbd164fa8660d36888"
							desc="全台唯一主祀「韓文公」韓愈的屏東縣內埔鄉昌黎祠，今年韓愈文化祭於三十日至十月二日擴大舉辦，屏東郵局與內埔鄉昌黎祠於二十七日發行「昌黎祠祈願個人化郵票」並舉行過爐儀式，保佑考生金榜題名。"
							link="https://tw.news.yahoo.com/%E9%9F%93%E6%84%88%E6%96%87%E5%8C%96%E7%A5%AD-%E6%98%8C%E9%BB%8E%E7%A5%A0%E5%80%8B%E4%BA%BA%E5%8C%96%E9%83%B5%E7%A5%A8%E9%81%8E%E7%88%90-131004810.html"
						/>
					</div>
				</div>
				<div className="bottom">
					<BottomPost
						title="張淑娟一句「住郊區新店」網戰翻！ 房產大老1理由力挺：確實是"
						desc="昨天台灣政壇最轟動的消息，恐怕是身陷前立委蔣孝嚴誹聞案的女主角張淑娟。她泣訴的一句「「我連台北市的房子都買不起，住在郊區，我住的是新店欸！」也引起網友熱議。"
						link="https://tw.news.yahoo.com/%E5%BC%B5%E6%B7%91%E5%A8%9F-%E5%8F%A5-%E4%BD%8F%E9%83%8A%E5%8D%80%E6%96%B0%E5%BA%97-%E7%B6%B2%E6%88%B0%E7%BF%BB-%E6%88%BF%E7%94%A2%E5%A4%A7%E8%80%811%E7%90%86%E7%94%B1%E5%8A%9B%E6%8C%BA-023900585.html"
					/>
					<BottomPost
						title="筆電市場疲弱…廣達棄單 付2.5億違約金"
						desc="全球筆電代工龍頭廣達（2382）無預警取消原定向大陸採購的鏡頭模組訂單，並為此支付790萬美元（約新台幣2.5億元）違約金，換算高達300萬台筆電的使用量。在英特爾、超微示警PC市況比先前其悲觀預估還要差之際，廣達對供應鏈砍單，進一步凸顯整體市況低迷。"
						link="https://tw.news.yahoo.com/%E7%AD%86%E9%9B%BB%E5%B8%82%E5%A0%B4%E7%96%B2%E5%BC%B1-%E5%BB%A3%E9%81%94%E6%A3%84%E5%96%AE-%E4%BB%982-5%E5%84%84%E9%81%95%E7%B4%84%E9%87%91-230037472.html"
					/>
					<BottomPost
						title="基因強？BA.5疫情也未染疫 黃立民：天選之人僅3%"
						desc="新冠肺炎肆虐全球已近3年，全台染疫人口已突破600萬人，今年疫情以來累計確診死亡人數也正式突破1萬例。不過，仍有「天選之人」至今未曾感染過新冠，真的是免疫力超群？還是真的非常幸運？台大兒童醫院小兒部專任主治醫師黃立民指出，至今都沒有染疫的人，可能是基因中有特殊之處，但全人口中僅3%這樣的人，因此並非所有未染疫者都是天選之人。"
						link="https://tw.news.yahoo.com/%E5%9F%BA%E5%9B%A0%E5%BC%B7-ba-5%E7%96%AB%E6%83%85%E4%B9%9F%E6%9C%AA%E6%9F%93%E7%96%AB-%E9%BB%83%E7%AB%8B%E6%B0%91-%E5%A4%A9%E9%81%B8%E4%B9%8B%E4%BA%BA%E5%83%853-223515065.html"
					/>
				</div>
			</Main>
			<Footer>
				<span>{today}</span>
				<h3>{title}</h3>
				<span>返回頂部</span>
			</Footer>
		</div>
	);
}

const Post = ({ title, imgUrl, desc, link }) => (
	<article>
		<h2>{title}</h2>
		<img src={imgUrl} alt={title} />
		<p>{desc}</p>
		<a href={link}>Read more here...</a>
	</article>
);

const BottomPost = ({ title, desc, link }) => (
	<article>
		<h3>{title}</h3>
		<p>{desc}</p>
		<a href={link}>Read more here...</a>
	</article>
);

export default App;
