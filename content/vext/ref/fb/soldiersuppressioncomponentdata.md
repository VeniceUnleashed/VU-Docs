---
title: SoldierSuppressionComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[SoldierSuppressionComponentData](#constructor-0)**() |
| **[SoldierSuppressionComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoldierSuppressionComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[SoldierSuppressionComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SoldierSuppressionComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SoldierSuppressionComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "reactionToSuppression" >}} | [SuppressionReactionData](/vext/ref/fb/suppressionreactiondata) |
| {{< prop "suppressionResistModifier" >}} | float |
| {{< prop "suppressionBoostModifier" >}} | float |
| {{< prop "suppressionDecay" >}} | float |
| {{< prop "suppressionSphereRadius" >}} | float |
| {{< prop "fallOffDelay" >}} | float |
| {{< prop "fallOffMultiplier" >}} | float |
| {{< prop "suppressionAbortsHealthRegeneration" >}} | bool |
| {{< prop "checkLineOfSight" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierSuppressionComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierSuppressionComponentData {#constructor-0}

> **SoldierSuppressionComponentData**()

Creates a new [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata) frostbite instance.

### SoldierSuppressionComponentData {#constructor-1}

> **SoldierSuppressionComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoldierSuppressionComponentData {#constructor-2}

> **SoldierSuppressionComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata). |

### SoldierSuppressionComponentData {#constructor-3}

> **SoldierSuppressionComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata). |

### SoldierSuppressionComponentData {#constructor-4}

> **SoldierSuppressionComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata). |

### SoldierSuppressionComponentData {#constructor-5}

> **SoldierSuppressionComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata). |

## Properties

### {{% prop-heading "reactionToSuppression" %}}

> **[SuppressionReactionData](/vext/ref/fb/suppressionreactiondata)**

### {{% prop-heading "suppressionResistModifier" %}}

> **float**

### {{% prop-heading "suppressionBoostModifier" %}}

> **float**

### {{% prop-heading "suppressionDecay" %}}

> **float**

### {{% prop-heading "suppressionSphereRadius" %}}

> **float**

### {{% prop-heading "fallOffDelay" %}}

> **float**

### {{% prop-heading "fallOffMultiplier" %}}

> **float**

### {{% prop-heading "suppressionAbortsHealthRegeneration" %}}

> **bool**

### {{% prop-heading "checkLineOfSight" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata) type.

