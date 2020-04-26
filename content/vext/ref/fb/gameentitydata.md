---
title: GameEntityData
---

Inherits from [SpatialEntityData](/vext/ref/fb/spatialentitydata)

## Summary

### Constructors

|  |
| --- |
| **[GameEntityData](#constructor-0)**() |
| **[GameEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GameEntityData](#constructor-2)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[GameEntityData](#constructor-3)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[GameEntityData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[GameEntityData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[GameEntityData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "components" >}} | [GameObjectData](/vext/ref/fb/gameobjectdata)[] |
| {{< prop "enabled" >}} | bool |
| {{< prop "runtimeComponentCount" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GameEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GameEntityData {#constructor-0}

> **GameEntityData**()

Creates a new [GameEntityData](/vext/ref/fb/gameentitydata) frostbite instance.

### GameEntityData {#constructor-1}

> **GameEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GameEntityData](/vext/ref/fb/gameentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GameEntityData {#constructor-2}

> **GameEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [GameEntityData](/vext/ref/fb/gameentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [GameEntityData](/vext/ref/fb/gameentitydata). |

### GameEntityData {#constructor-3}

> **GameEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [GameEntityData](/vext/ref/fb/gameentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [GameEntityData](/vext/ref/fb/gameentitydata). |

### GameEntityData {#constructor-4}

> **GameEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [GameEntityData](/vext/ref/fb/gameentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [GameEntityData](/vext/ref/fb/gameentitydata). |

### GameEntityData {#constructor-5}

> **GameEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [GameEntityData](/vext/ref/fb/gameentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [GameEntityData](/vext/ref/fb/gameentitydata). |

### GameEntityData {#constructor-6}

> **GameEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GameEntityData](/vext/ref/fb/gameentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GameEntityData](/vext/ref/fb/gameentitydata). |

## Properties

### {{% prop-heading "components" %}}

> **[GameObjectData](/vext/ref/fb/gameobjectdata)**[]

### {{% prop-heading "enabled" %}}

> **bool**

### {{% prop-heading "runtimeComponentCount" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GameEntityData](/vext/ref/fb/gameentitydata) type.

