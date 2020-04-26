---
title: SoldierAimingSimulationData
---

Inherits from [GameDataContainer](/vext/ref/fb/gamedatacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SoldierAimingSimulationData](#constructor-0)**() |
| **[SoldierAimingSimulationData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoldierAimingSimulationData](#constructor-2)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SoldierAimingSimulationData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "zoomLevels" >}} | [ZoomLevelData](/vext/ref/fb/zoomleveldata)[] |
| {{< prop "zoomTransitionTime" >}} | float |
| {{< prop "aimAssist" >}} | [SoldierAimAssistData](/vext/ref/fb/soldieraimassistdata) \| nil |
| {{< prop "standPose" >}} | [AimingPoseData](/vext/ref/fb/aimingposedata) |
| {{< prop "crouchPose" >}} | [AimingPoseData](/vext/ref/fb/aimingposedata) |
| {{< prop "pronePose" >}} | [AimingPoseData](/vext/ref/fb/aimingposedata) |
| {{< prop "zoomTransitionTimeArray" >}} | [ZoomLevelSpecificTransitionTime](/vext/ref/fb/zoomlevelspecifictransitiontime)[] |
| {{< prop "fovTransitionTime" >}} | float |
| {{< prop "fovDelayTime" >}} | float |
| {{< prop "modifiers" >}} | [AimerModifierData](/vext/ref/fb/aimermodifierdata)[] |
| {{< prop "aimingRange" >}} | float |
| {{< prop "lockAimToTargetSpeed" >}} | float |
| {{< prop "returnToZoomAfterReload" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierAimingSimulationData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierAimingSimulationData {#constructor-0}

> **SoldierAimingSimulationData**()

Creates a new [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata) frostbite instance.

### SoldierAimingSimulationData {#constructor-1}

> **SoldierAimingSimulationData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoldierAimingSimulationData {#constructor-2}

> **SoldierAimingSimulationData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata). |

### SoldierAimingSimulationData {#constructor-3}

> **SoldierAimingSimulationData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata). |

## Properties

### {{% prop-heading "zoomLevels" %}}

> **[ZoomLevelData](/vext/ref/fb/zoomleveldata)**[]

### {{% prop-heading "zoomTransitionTime" %}}

> **float**

### {{% prop-heading "aimAssist" %}}

> **[SoldierAimAssistData](/vext/ref/fb/soldieraimassistdata)** \| **nil**

### {{% prop-heading "standPose" %}}

> **[AimingPoseData](/vext/ref/fb/aimingposedata)**

### {{% prop-heading "crouchPose" %}}

> **[AimingPoseData](/vext/ref/fb/aimingposedata)**

### {{% prop-heading "pronePose" %}}

> **[AimingPoseData](/vext/ref/fb/aimingposedata)**

### {{% prop-heading "zoomTransitionTimeArray" %}}

> **[ZoomLevelSpecificTransitionTime](/vext/ref/fb/zoomlevelspecifictransitiontime)**[]

### {{% prop-heading "fovTransitionTime" %}}

> **float**

### {{% prop-heading "fovDelayTime" %}}

> **float**

### {{% prop-heading "modifiers" %}}

> **[AimerModifierData](/vext/ref/fb/aimermodifierdata)**[]

### {{% prop-heading "aimingRange" %}}

> **float**

### {{% prop-heading "lockAimToTargetSpeed" %}}

> **float**

### {{% prop-heading "returnToZoomAfterReload" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata) type.

