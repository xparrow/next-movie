import { API_URL } from "../constants";
import styles from "../styles/movie-providers.module.css";

async function getProviders(id:string){
	const response = await fetch(`${API_URL}/${id}/providers`);
	return response.json();
}

export default async function MovieProviders({id}:{id:string}){
	const providers = await getProviders(id);
	return(
		<div className={styles.wrapDiv}>
			<div>
				<h3 className="tit-h3">한국</h3>
				{	
					providers.KR !== undefined ? // 한국 providers 있을 시
					<div>
						<h4 className="tit-h4">다운로드</h4>
						{
							providers.KR.buy !== undefined ?
							<ul className={styles.flexList}>
								{
									providers.KR.buy.map((provider)=>{
										return(
											<li key={provider.provider_id}>
												<img src={provider.logo_path} alt={provider.provider_name} />
											</li>
										)
									})
								}
							</ul> :
							<p className={styles.noneTxt}>공급 업체가 없습니다.</p>
						}
						
						<h4 className="tit-h4">스트리밍</h4>
						{
							providers.KR.rent !== undefined ?
							<ul className={styles.flexList}>
								{
									providers.KR.rent.map((provider)=>{
										return(
											<li key={provider.provider_id}>
												<img src={provider.logo_path} alt={provider.provider_name} />
											</li>
										)
									})
								}
							</ul>:
							<p className={styles.noneTxt}>공급 업체가 없습니다.</p>
						}
					</div>
					:
					<p className={styles.noneTxt}>공급 업체가 없습니다.</p> // 한국 providers 없을 시
				}
			</div>
			<div>
				<h3 className="tit-h3">미국</h3>
				{
					providers.US !== undefined ?
					<div>
						<h4 className="tit-h4">다운로드</h4>
						{
							providers.US.buy !== undefined ?
							<ul className={styles.flexList}>
								{
									providers.US.buy.map((provider)=>{
										return(
											<li key={provider.provider_id}>
												<img src={provider.logo_path} alt={provider.provider_name} />
											</li>
										)
									})
								}
							</ul>:
							<p className={styles.noneTxt}>공급 업체가 없습니다.</p>
						}
						<h4 className="tit-h4">스트리밍</h4>
						{
							providers.US.rent !== undefined ?
							<ul className={styles.flexList}>
								{
									providers.US.rent.map((provider)=>{
										return(
											<li key={provider.provider_id}>
												<img src={provider.logo_path} alt={provider.provider_name} />
											</li>
										)
									})
								}
							</ul>:
							<p className={styles.noneTxt}>공급 업체가 없습니다.</p>
						}
					</div>
					:
					<p className={styles.noneTxt}>공급 업체가 없습니다.</p>
				}
			</div>
		</div>
	)
}