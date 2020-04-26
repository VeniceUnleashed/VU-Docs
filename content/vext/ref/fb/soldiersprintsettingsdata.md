---
title: SoldierSprintSettingsData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SoldierSprintSettingsData](#constructor-0)**() |
| **[SoldierSprintSettingsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoldierSprintSettingsData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "fov" >}} | float |
| {{< prop "fovInDelay" >}} | float |
| {{< prop "fovInTime" >}} | float |
| {{< prop "fovOutDelay" >}} | float |
| {{< prop "fovOutTime" >}} | float |
| {{< prop "recoverTime" >}} | float |
| {{< prop "sprintToProneRecoverTime" >}} | float |
| {{< prop "interruptingActions" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierSprintSettingsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierSprintSettingsData {#constructor-0}

> **SoldierSprintSettingsData**()

Creates a new [SoldierSprintSettingsData](/vext/ref/fb/soldiersprintsettingsdata) frostbite instance.

### SoldierSprintSettingsData {#constructor-1}

> **SoldierSprintSettingsData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierSprintSettingsData](/vext/ref/fb/soldiersprintsettingsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoldierSprintSettingsData {#constructor-2}

> **SoldierSprintSettingsData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoldierSprintSettingsData](/vext/ref/fb/soldiersprintsettingsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoldierSprintSettingsData](/vext/ref/fb/soldiersprintsettingsdata). |

## Properties

### {{% prop-heading "fov" %}}

> **float**

### {{% prop-heading "fovInDelay" %}}

> **float**

### {{% prop-heading "fovInTime" %}}

> **float**

### {{% prop-heading "fovOutDelay" %}}

> **float**

### {{% prop-heading "fovOutTime" %}}

> **float**

### {{% prop-heading "recoverTime" %}}

> **float**

### {{% prop-heading "sprintToProneRecoverTime" %}}

> **float**

### {{% prop-heading "interruptingActions" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierSprintSettingsData](/vext/ref/fb/soldiersprintsettingsdata) type.

