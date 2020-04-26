---
title: DecalEntityData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[DecalEntityData](#constructor-0)**() |
| **[DecalEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DecalEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[DecalEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[DecalEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[DecalEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DecalEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DecalEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "shader" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "atlasTile" >}} | [DecalAtlasTile](/vext/ref/fb/decalatlastile) |
| {{< prop "materialIndex" >}} | int |
| {{< prop "sortingPriority" >}} | int |
| {{< prop "projected" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DecalEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DecalEntityData {#constructor-0}

> **DecalEntityData**()

Creates a new [DecalEntityData](/vext/ref/fb/decalentitydata) frostbite instance.

### DecalEntityData {#constructor-1}

> **DecalEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DecalEntityData](/vext/ref/fb/decalentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DecalEntityData {#constructor-2}

> **DecalEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [DecalEntityData](/vext/ref/fb/decalentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [DecalEntityData](/vext/ref/fb/decalentitydata). |

### DecalEntityData {#constructor-3}

> **DecalEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [DecalEntityData](/vext/ref/fb/decalentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [DecalEntityData](/vext/ref/fb/decalentitydata). |

### DecalEntityData {#constructor-4}

> **DecalEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [DecalEntityData](/vext/ref/fb/decalentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [DecalEntityData](/vext/ref/fb/decalentitydata). |

### DecalEntityData {#constructor-5}

> **DecalEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DecalEntityData](/vext/ref/fb/decalentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DecalEntityData](/vext/ref/fb/decalentitydata). |

### DecalEntityData {#constructor-6}

> **DecalEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DecalEntityData](/vext/ref/fb/decalentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DecalEntityData](/vext/ref/fb/decalentitydata). |

### DecalEntityData {#constructor-7}

> **DecalEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DecalEntityData](/vext/ref/fb/decalentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DecalEntityData](/vext/ref/fb/decalentitydata). |

## Properties

### {{% prop-heading "shader" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

### {{% prop-heading "atlasTile" %}}

> **[DecalAtlasTile](/vext/ref/fb/decalatlastile)**

### {{% prop-heading "materialIndex" %}}

> **int**

### {{% prop-heading "sortingPriority" %}}

> **int**

### {{% prop-heading "projected" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DecalEntityData](/vext/ref/fb/decalentitydata) type.

