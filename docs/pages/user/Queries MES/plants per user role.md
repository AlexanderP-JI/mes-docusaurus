SELECT [activity_group]
      ,[role]
      ,[plant]
  FROM [MES].[dbo].[users_sap_roles] sap_roles
  LEFT JOIN [MES].[dbo].[plants_authorizations] plant_auth 
    ON plant_auth.user_sap_role_id = sap_roles.id