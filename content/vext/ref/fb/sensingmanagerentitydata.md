---
title: SensingManagerEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[SensingManagerEntityData](#constructor-0)**() |
| **[SensingManagerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SensingManagerEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SensingManagerEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SensingManagerEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SensingManagerEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "senseTerrainAreas" >}} | [SensingSphere](/vext/ref/fb/sensingsphere)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SensingManagerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SensingManagerEntityData {#constructor-0}

> **SensingManagerEntityData**()

Creates a new [SensingManagerEntityData](/vext/ref/fb/sensingmanagerentitydata) frostbite instance.

### SensingManagerEntityData {#constructor-1}

> **SensingManagerEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SensingManagerEntityData](/vext/ref/fb/sensingmanagerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SensingManagerEntityData {#constructor-2}

> **SensingManagerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SensingManagerEntityData](/vext/ref/fb/sensingmanagerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SensingManagerEntityData](/vext/ref/fb/sensingmanagerentitydata). |

### SensingManagerEntityData {#constructor-3}

> **SensingManagerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SensingManagerEntityData](/vext/ref/fb/sensingmanagerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SensingManagerEntityData](/vext/ref/fb/sensingmanagerentitydata). |

### SensingManagerEntityData {#constructor-4}

> **SensingManagerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SensingManagerEntityData](/vext/ref/fb/sensingmanagerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SensingManagerEntityData](/vext/ref/fb/sensingmanagerentitydata). |

### SensingManagerEntityData {#constructor-5}

> **SensingManagerEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SensingManagerEntityData](/vext/ref/fb/sensingmanagerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SensingManagerEntityData](/vext/ref/fb/sensingmanagerentitydata). |

## Properties

### {{% prop-heading "senseTerrainAreas" %}}

> **[SensingSphere](/vext/ref/fb/sensingsphere)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SensingManagerEntityData](/vext/ref/fb/sensingmanagerentitydata) type.

