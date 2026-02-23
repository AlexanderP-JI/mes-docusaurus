INSERT INTO [MESQAS].[dbo].[workcenter_configs] 
      ([counter], [value], [parameter_type], [workcenter])
SELECT [counter]
      ,[value]
      ,[parameter_type]
      ,'P010M097' -- Hier overschrijven we de oude waarde met de nieuwe
  FROM [MESQAS].[dbo].[workcenter_configs]
  WHERE workcenter = 'P600M601';