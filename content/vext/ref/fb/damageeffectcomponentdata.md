---
title: DamageEffectComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[DamageEffectComponentData](#constructor-0)**() |
| **[DamageEffectComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DamageEffectComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[DamageEffectComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DamageEffectComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DamageEffectComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rightDamage" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "topDamage" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "leftDamage" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "bottomDamage" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "outerFrameOpacity" >}} | float |
| {{< prop "innerFrameOpacity" >}} | float |
| {{< prop "frameWidth" >}} | float |
| {{< prop "shader" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "startCriticalEffectHealthThreshold" >}} | float |
| {{< prop "endCriticalEffectHealthThreshold" >}} | float |
| {{< prop "minDamagePercentageThreshold" >}} | float |
| {{< prop "fallofTime" >}} | float |
| {{< prop "maxOpacityDamagePercentage" >}} | float |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "debugDamage" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DamageEffectComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DamageEffectComponentData {#constructor-0}

> **DamageEffectComponentData**()

Creates a new [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata) frostbite instance.

### DamageEffectComponentData {#constructor-1}

> **DamageEffectComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DamageEffectComponentData {#constructor-2}

> **DamageEffectComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata). |

### DamageEffectComponentData {#constructor-3}

> **DamageEffectComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata). |

### DamageEffectComponentData {#constructor-4}

> **DamageEffectComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata). |

### DamageEffectComponentData {#constructor-5}

> **DamageEffectComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata). |

## Properties

### {{% prop-heading "rightDamage" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "topDamage" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "leftDamage" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "bottomDamage" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "outerFrameOpacity" %}}

> **float**

### {{% prop-heading "innerFrameOpacity" %}}

> **float**

### {{% prop-heading "frameWidth" %}}

> **float**

### {{% prop-heading "shader" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

### {{% prop-heading "startCriticalEffectHealthThreshold" %}}

> **float**

### {{% prop-heading "endCriticalEffectHealthThreshold" %}}

> **float**

### {{% prop-heading "minDamagePercentageThreshold" %}}

> **float**

### {{% prop-heading "fallofTime" %}}

> **float**

### {{% prop-heading "maxOpacityDamagePercentage" %}}

> **float**

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "debugDamage" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata) type.

