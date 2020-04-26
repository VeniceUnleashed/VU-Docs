---
title: RotorComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[RotorComponentData](#constructor-0)**() |
| **[RotorComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[RotorComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[RotorComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[RotorComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[RotorComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "lowRpmModel" >}} | [RotorModelData](/vext/ref/fb/rotormodeldata) |
| {{< prop "highRpmModel" >}} | [RotorModelData](/vext/ref/fb/rotormodeldata) |
| {{< prop "rotationAxis" >}} | [RotationAxis](/vext/ref/fb/rotationaxis) |
| {{< prop "rotationMultiplier" >}} | float |
| {{< prop "changeModelRpm" >}} | float |
| {{< prop "blowEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "triggerGroundEffectHeight" >}} | float |
| {{< prop "criticallyDamagedRotationForce" >}} | float |
| {{< prop "onlyTriggerBlowEffectInWater" >}} | bool |
| {{< prop "groundEffectOnTerrainOnly" >}} | bool |
| {{< prop "criticalDamage" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RotorComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RotorComponentData {#constructor-0}

> **RotorComponentData**()

Creates a new [RotorComponentData](/vext/ref/fb/rotorcomponentdata) frostbite instance.

### RotorComponentData {#constructor-1}

> **RotorComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RotorComponentData](/vext/ref/fb/rotorcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### RotorComponentData {#constructor-2}

> **RotorComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [RotorComponentData](/vext/ref/fb/rotorcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [RotorComponentData](/vext/ref/fb/rotorcomponentdata). |

### RotorComponentData {#constructor-3}

> **RotorComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [RotorComponentData](/vext/ref/fb/rotorcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [RotorComponentData](/vext/ref/fb/rotorcomponentdata). |

### RotorComponentData {#constructor-4}

> **RotorComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [RotorComponentData](/vext/ref/fb/rotorcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [RotorComponentData](/vext/ref/fb/rotorcomponentdata). |

### RotorComponentData {#constructor-5}

> **RotorComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [RotorComponentData](/vext/ref/fb/rotorcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [RotorComponentData](/vext/ref/fb/rotorcomponentdata). |

## Properties

### {{% prop-heading "lowRpmModel" %}}

> **[RotorModelData](/vext/ref/fb/rotormodeldata)**

### {{% prop-heading "highRpmModel" %}}

> **[RotorModelData](/vext/ref/fb/rotormodeldata)**

### {{% prop-heading "rotationAxis" %}}

> **[RotationAxis](/vext/ref/fb/rotationaxis)**

### {{% prop-heading "rotationMultiplier" %}}

> **float**

### {{% prop-heading "changeModelRpm" %}}

> **float**

### {{% prop-heading "blowEffect" %}}

> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** \| **nil**

### {{% prop-heading "triggerGroundEffectHeight" %}}

> **float**

### {{% prop-heading "criticallyDamagedRotationForce" %}}

> **float**

### {{% prop-heading "onlyTriggerBlowEffectInWater" %}}

> **bool**

### {{% prop-heading "groundEffectOnTerrainOnly" %}}

> **bool**

### {{% prop-heading "criticalDamage" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RotorComponentData](/vext/ref/fb/rotorcomponentdata) type.

