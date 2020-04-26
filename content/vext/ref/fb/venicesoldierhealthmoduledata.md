---
title: VeniceSoldierHealthModuleData
---

Inherits from [SoldierHealthModuleData](/vext/ref/fb/soldierhealthmoduledata)

## Summary

### Constructors

|  |
| --- |
| **[VeniceSoldierHealthModuleData](#constructor-0)**() |
| **[VeniceSoldierHealthModuleData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VeniceSoldierHealthModuleData](#constructor-2)**(other: [SoldierHealthModuleData](/vext/ref/fb/soldierhealthmoduledata)) |
| **[VeniceSoldierHealthModuleData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "timeForCorpse" >}} | float |
| {{< prop "postReviveResponseTime" >}} | float |
| {{< prop "interactiveManDownThreshold" >}} | float |
| {{< prop "interactiveManDownPoseConstraints" >}} | [PoseConstraintsData](/vext/ref/fb/poseconstraintsdata) |
| {{< prop "manDownStateTime" >}} | float |
| {{< prop "manDownStateHealthPoints" >}} | float |
| {{< prop "immortalTimeAfterSpawn" >}} | float |
| {{< prop "abortSpawnImmortalityInputs" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)[] |
| {{< prop "postReviveHealth" >}} | float |
| {{< prop "criticalFakeImmortalTime" >}} | float |
| {{< prop "regenerationDelay" >}} | float |
| {{< prop "regenerationRate" >}} | float |
| {{< prop "binding" >}} | [SoldierHealthModuleBinding](/vext/ref/fb/soldierhealthmodulebinding) |
| {{< prop "sprintDisabledWhenDamagedTime" >}} | float |
| {{< prop "sprintDisabledDamageThreshold" >}} | float |
| {{< prop "manDownRotate" >}} | [RotateToHitData](/vext/ref/fb/rotatetohitdata) |
| {{< prop "interactiveManDown" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VeniceSoldierHealthModuleData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VeniceSoldierHealthModuleData {#constructor-0}

> **VeniceSoldierHealthModuleData**()

Creates a new [VeniceSoldierHealthModuleData](/vext/ref/fb/venicesoldierhealthmoduledata) frostbite instance.

### VeniceSoldierHealthModuleData {#constructor-1}

> **VeniceSoldierHealthModuleData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VeniceSoldierHealthModuleData](/vext/ref/fb/venicesoldierhealthmoduledata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VeniceSoldierHealthModuleData {#constructor-2}

> **VeniceSoldierHealthModuleData**(other: [SoldierHealthModuleData](/vext/ref/fb/soldierhealthmoduledata))

Casts an instance of type [SoldierHealthModuleData](/vext/ref/fb/soldierhealthmoduledata) to [VeniceSoldierHealthModuleData](/vext/ref/fb/venicesoldierhealthmoduledata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SoldierHealthModuleData](/vext/ref/fb/soldierhealthmoduledata) | The instance to cast to [VeniceSoldierHealthModuleData](/vext/ref/fb/venicesoldierhealthmoduledata). |

### VeniceSoldierHealthModuleData {#constructor-3}

> **VeniceSoldierHealthModuleData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VeniceSoldierHealthModuleData](/vext/ref/fb/venicesoldierhealthmoduledata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VeniceSoldierHealthModuleData](/vext/ref/fb/venicesoldierhealthmoduledata). |

## Properties

### {{% prop-heading "timeForCorpse" %}}

> **float**

### {{% prop-heading "postReviveResponseTime" %}}

> **float**

### {{% prop-heading "interactiveManDownThreshold" %}}

> **float**

### {{% prop-heading "interactiveManDownPoseConstraints" %}}

> **[PoseConstraintsData](/vext/ref/fb/poseconstraintsdata)**

### {{% prop-heading "manDownStateTime" %}}

> **float**

### {{% prop-heading "manDownStateHealthPoints" %}}

> **float**

### {{% prop-heading "immortalTimeAfterSpawn" %}}

> **float**

### {{% prop-heading "abortSpawnImmortalityInputs" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**[]

### {{% prop-heading "postReviveHealth" %}}

> **float**

### {{% prop-heading "criticalFakeImmortalTime" %}}

> **float**

### {{% prop-heading "regenerationDelay" %}}

> **float**

### {{% prop-heading "regenerationRate" %}}

> **float**

### {{% prop-heading "binding" %}}

> **[SoldierHealthModuleBinding](/vext/ref/fb/soldierhealthmodulebinding)**

### {{% prop-heading "sprintDisabledWhenDamagedTime" %}}

> **float**

### {{% prop-heading "sprintDisabledDamageThreshold" %}}

> **float**

### {{% prop-heading "manDownRotate" %}}

> **[RotateToHitData](/vext/ref/fb/rotatetohitdata)**

### {{% prop-heading "interactiveManDown" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VeniceSoldierHealthModuleData](/vext/ref/fb/venicesoldierhealthmoduledata) type.

