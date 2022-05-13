import { GetStaticProps } from "next";
import React, { useCallback } from "react";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import Header from "../../components/atoms/Header";
import { User } from "../../types/SchemaTypes";
import { fetchAllByType } from "../api/client";
import flexhelper from "../../styles/flexhelper.module.css";


interface HomMypetsProps {
    users: User[];
  }

export const getStaticProps: GetStaticProps = async () => {
	const users: User[] = await fetchAllByType<User[]>("user");
	return {
		props: {
			users,
		},
	};
};


const Mypets: React.FC<HomMypetsProps> = ({ users }) => {
	const handleUserClick = useCallback(
		(id: string) => {
			console.log(id);
		},
		[],
	);
    
	return (
		<>
			<Header headerText="Velg bruker å se på" />
			<div className={flexhelper.flexrow}>
				{users.map((user) => (
					<Button key={user._id} callback={() => handleUserClick(user._id)} text={user.name} />
				))}
			</div>
		</>
	);
};

export default Mypets;
