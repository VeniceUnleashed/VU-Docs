---
title: SoldierFootplantEffectComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[SoldierFootplantEffectComponentData](#constructor-0)**() |
| **[SoldierFootplantEffectComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoldierFootplantEffectComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[SoldierFootplantEffectComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SoldierFootplantEffectComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SoldierFootplantEffectComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "footMaterialPair" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "heightOverGroundThreshold" >}} | float |
| {{< prop "footVelocityThreshold" >}} | float |
| {{< prop "lodDistance" >}} | float |
| {{< prop "fullFootplantingEnabled" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierFootplantEffectComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierFootplantEffectComponentData {#constructor-0}

> **SoldierFootplantEffectComponentData**()

Creates a new [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata) frostbite instance.

### SoldierFootplantEffectComponentData {#constructor-1}

> **SoldierFootplantEffectComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoldierFootplantEffectComponentData {#constructor-2}

> **SoldierFootplantEffectComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata). |

### SoldierFootplantEffectComponentData {#constructor-3}

> **SoldierFootplantEffectComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata). |

### SoldierFootplantEffectComponentData {#constructor-4}

> **SoldierFootplantEffectComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata). |

### SoldierFootplantEffectComponentData {#constructor-5}

> **SoldierFootplantEffectComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata). |

## Properties

### {{% prop-heading "footMaterialPair" %}}

> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** \| **nil**

### {{% prop-heading "heightOverGroundThreshold" %}}

> **float**

### {{% prop-heading "footVelocityThreshold" %}}

> **float**

### {{% prop-heading "lodDistance" %}}

> **float**

### {{% prop-heading "fullFootplantingEnabled" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata) type.

