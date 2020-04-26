---
title: SpottingComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[SpottingComponentData](#constructor-0)**() |
| **[SpottingComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SpottingComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[SpottingComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SpottingComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SpottingComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "spottingFov" >}} | float |
| {{< prop "teamOrderFov" >}} | float |
| {{< prop "spottingDistance" >}} | float |
| {{< prop "passiveSpottingTimeInterval" >}} | float |
| {{< prop "timeRequiredToPassiveSpot" >}} | float |
| {{< prop "orderNeedAmmoPercentage" >}} | float |
| {{< prop "orderHealPercentage" >}} | float |
| {{< prop "orderRepairPercentage" >}} | float |
| {{< prop "pickupOrderDistance" >}} | float |
| {{< prop "healOrderDistance" >}} | float |
| {{< prop "ammoOrderDistance" >}} | float |
| {{< prop "repairOrderDistance" >}} | float |
| {{< prop "coolDownHistoryTime" >}} | float |
| {{< prop "coolDownAllowedSpotsWithinHistory" >}} | int |
| {{< prop "onlyAllowedToHaveOneSpottedPlayer" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SpottingComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SpottingComponentData {#constructor-0}

> **SpottingComponentData**()

Creates a new [SpottingComponentData](/vext/ref/fb/spottingcomponentdata) frostbite instance.

### SpottingComponentData {#constructor-1}

> **SpottingComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SpottingComponentData](/vext/ref/fb/spottingcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SpottingComponentData {#constructor-2}

> **SpottingComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [SpottingComponentData](/vext/ref/fb/spottingcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [SpottingComponentData](/vext/ref/fb/spottingcomponentdata). |

### SpottingComponentData {#constructor-3}

> **SpottingComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SpottingComponentData](/vext/ref/fb/spottingcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SpottingComponentData](/vext/ref/fb/spottingcomponentdata). |

### SpottingComponentData {#constructor-4}

> **SpottingComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SpottingComponentData](/vext/ref/fb/spottingcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SpottingComponentData](/vext/ref/fb/spottingcomponentdata). |

### SpottingComponentData {#constructor-5}

> **SpottingComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SpottingComponentData](/vext/ref/fb/spottingcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SpottingComponentData](/vext/ref/fb/spottingcomponentdata). |

## Properties

### {{% prop-heading "spottingFov" %}}

> **float**

### {{% prop-heading "teamOrderFov" %}}

> **float**

### {{% prop-heading "spottingDistance" %}}

> **float**

### {{% prop-heading "passiveSpottingTimeInterval" %}}

> **float**

### {{% prop-heading "timeRequiredToPassiveSpot" %}}

> **float**

### {{% prop-heading "orderNeedAmmoPercentage" %}}

> **float**

### {{% prop-heading "orderHealPercentage" %}}

> **float**

### {{% prop-heading "orderRepairPercentage" %}}

> **float**

### {{% prop-heading "pickupOrderDistance" %}}

> **float**

### {{% prop-heading "healOrderDistance" %}}

> **float**

### {{% prop-heading "ammoOrderDistance" %}}

> **float**

### {{% prop-heading "repairOrderDistance" %}}

> **float**

### {{% prop-heading "coolDownHistoryTime" %}}

> **float**

### {{% prop-heading "coolDownAllowedSpotsWithinHistory" %}}

> **int**

### {{% prop-heading "onlyAllowedToHaveOneSpottedPlayer" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SpottingComponentData](/vext/ref/fb/spottingcomponentdata) type.

