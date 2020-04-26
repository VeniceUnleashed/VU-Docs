---
title: VisualTerrainEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[VisualTerrainEntityData](#constructor-0)**() |
| **[VisualTerrainEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VisualTerrainEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[VisualTerrainEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[VisualTerrainEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[VisualTerrainEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "terrain" >}} | [TerrainData](/vext/ref/fb/terraindata) \| nil |
| {{< prop "settings" >}} | [VisualTerrainSettings](/vext/ref/fb/visualterrainsettings) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VisualTerrainEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VisualTerrainEntityData {#constructor-0}

> **VisualTerrainEntityData**()

Creates a new [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata) frostbite instance.

### VisualTerrainEntityData {#constructor-1}

> **VisualTerrainEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VisualTerrainEntityData {#constructor-2}

> **VisualTerrainEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata). |

### VisualTerrainEntityData {#constructor-3}

> **VisualTerrainEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata). |

### VisualTerrainEntityData {#constructor-4}

> **VisualTerrainEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata). |

### VisualTerrainEntityData {#constructor-5}

> **VisualTerrainEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata). |

## Properties

### {{% prop-heading "terrain" %}}

> **[TerrainData](/vext/ref/fb/terraindata)** \| **nil**

### {{% prop-heading "settings" %}}

> **[VisualTerrainSettings](/vext/ref/fb/visualterrainsettings)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata) type.

