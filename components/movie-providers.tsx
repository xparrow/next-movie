import { API_URL } from "../constants";
import styles from "../styles/movie-providers.module.css";

async function getProviders(id:string){
	const response = await fetch(`${API_URL}/${id}/providers`);
	return response.json();
}

export default async function MovieProviders({id}:{id:string}){
	const providers = await getProviders(id);
	console.log(providers.KO);
	console.log(providers.KW);
	console.log(providers.KR);
	return(
		<div className={styles.wrapDiv}>
			<div>
				<h3 className="tit-h3">한국</h3>
				{	
					providers.KR !== undefined ? // 한국 providers 있을 시
					<div>
						{
							providers.KR.buy !== undefined &&
							<div>
								<h4 className="tit-h4">다운로드</h4>
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
								</ul>
							</div>
						}
						{
							providers.KR.rent !== undefined &&
							<div>
								<h4 className="tit-h4">Rent</h4>
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
								</ul>
							</div>
						}
						
						{
							providers.KR.flatrate !== undefined &&
							<div>
								<h4 className="tit-h4">스트리밍</h4>
								<ul className={styles.flexList}>
									{
										providers.KR.flatrate.map((provider)=>{
											return(
												<li key={provider.provider_id}>
													<img src={`https://media.themoviedb.org/t/p/original/${provider.logo_path}`} alt={provider.provider_name} />
												</li>
											)
										})
									}
								</ul>
							</div>
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
						{
							providers.US.buy !== undefined &&
							<div>
								<h4 className="tit-h4">다운로드</h4>
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
								</ul>
							</div>
						}
						{
							providers.US.rent !== undefined &&
							<div>
								<h4 className="tit-h4">Rent</h4>
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
								</ul>
							</div>
						}
						{
							providers.US.flatrate !== undefined &&
							<div>
								<h4 className="tit-h4">스트리밍</h4>
								<ul className={styles.flexList}>
									{
										providers.US.flatrate.map((provider)=>{
											return(
												<li key={provider.provider_id}>
													<img src={`https://media.themoviedb.org/t/p/original/${provider.logo_path}`} alt={provider.provider_name} />
												</li>
											)
										})
									}
								</ul>
							</div>
						}
					</div>
					:
					<p className={styles.noneTxt}>공급 업체가 없습니다.</p>
				}
			</div>
		</div>
	)
}