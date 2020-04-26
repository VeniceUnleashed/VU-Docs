---
title: DestructionMaskVolumeEntityData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[DestructionMaskVolumeEntityData](#constructor-0)**() |
| **[DestructionMaskVolumeEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DestructionMaskVolumeEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[DestructionMaskVolumeEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[DestructionMaskVolumeEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[DestructionMaskVolumeEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DestructionMaskVolumeEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DestructionMaskVolumeEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "dustAccumulationCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "shaderUserMasks" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "dustAccumulationLifeTime" >}} | float |
| {{< prop "shader" >}} | [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct) |
| {{< prop "radius" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DestructionMaskVolumeEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DestructionMaskVolumeEntityData {#constructor-0}

> **DestructionMaskVolumeEntityData**()

Creates a new [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata) frostbite instance.

### DestructionMaskVolumeEntityData {#constructor-1}

> **DestructionMaskVolumeEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DestructionMaskVolumeEntityData {#constructor-2}

> **DestructionMaskVolumeEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata). |

### DestructionMaskVolumeEntityData {#constructor-3}

> **DestructionMaskVolumeEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata). |

### DestructionMaskVolumeEntityData {#constructor-4}

> **DestructionMaskVolumeEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata). |

### DestructionMaskVolumeEntityData {#constructor-5}

> **DestructionMaskVolumeEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata). |

### DestructionMaskVolumeEntityData {#constructor-6}

> **DestructionMaskVolumeEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata). |

### DestructionMaskVolumeEntityData {#constructor-7}

> **DestructionMaskVolumeEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata). |

## Properties

### {{% prop-heading "dustAccumulationCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "shaderUserMasks" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "dustAccumulationLifeTime" %}}

> **float**

### {{% prop-heading "shader" %}}

> **[SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct)**

### {{% prop-heading "radius" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata) type.

