---
title: VisualEnvironmentEffectEntityData
---

Inherits from [EffectEntityData](/vext/ref/fb/effectentitydata)

## Summary

### Constructors

|  |
| --- |
| **[VisualEnvironmentEffectEntityData](#constructor-0)**() |
| **[VisualEnvironmentEffectEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VisualEnvironmentEffectEntityData](#constructor-2)**(other: [EffectEntityData](/vext/ref/fb/effectentitydata)) |
| **[VisualEnvironmentEffectEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[VisualEnvironmentEffectEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[VisualEnvironmentEffectEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[VisualEnvironmentEffectEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[VisualEnvironmentEffectEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "lifetimeCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "cullDistanceCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "cullAngleCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "lifetime" >}} | float |
| {{< prop "visualEnvironment" >}} | [VisualEnvironmentBlueprint](/vext/ref/fb/visualenvironmentblueprint) \| nil |
| {{< prop "sampleOnStartOnly" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VisualEnvironmentEffectEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VisualEnvironmentEffectEntityData {#constructor-0}

> **VisualEnvironmentEffectEntityData**()

Creates a new [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata) frostbite instance.

### VisualEnvironmentEffectEntityData {#constructor-1}

> **VisualEnvironmentEffectEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VisualEnvironmentEffectEntityData {#constructor-2}

> **VisualEnvironmentEffectEntityData**(other: [EffectEntityData](/vext/ref/fb/effectentitydata))

Casts an instance of type [EffectEntityData](/vext/ref/fb/effectentitydata) to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EffectEntityData](/vext/ref/fb/effectentitydata) | The instance to cast to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata). |

### VisualEnvironmentEffectEntityData {#constructor-3}

> **VisualEnvironmentEffectEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata). |

### VisualEnvironmentEffectEntityData {#constructor-4}

> **VisualEnvironmentEffectEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata). |

### VisualEnvironmentEffectEntityData {#constructor-5}

> **VisualEnvironmentEffectEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata). |

### VisualEnvironmentEffectEntityData {#constructor-6}

> **VisualEnvironmentEffectEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata). |

### VisualEnvironmentEffectEntityData {#constructor-7}

> **VisualEnvironmentEffectEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata). |

## Properties

### {{% prop-heading "lifetimeCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "cullDistanceCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "cullAngleCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "lifetime" %}}

> **float**

### {{% prop-heading "visualEnvironment" %}}

> **[VisualEnvironmentBlueprint](/vext/ref/fb/visualenvironmentblueprint)** \| **nil**

### {{% prop-heading "sampleOnStartOnly" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata) type.

