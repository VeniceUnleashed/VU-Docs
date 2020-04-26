---
title: TimingConstantData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[TimingConstantData](#constructor-0)**() |
| **[TimingConstantData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[TimingConstantData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[TimingConstantData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "updateTimePerFrame" >}} | float |
| {{< prop "subsystemTimeParts" >}} | [SubsystemTimingConfigData](/vext/ref/fb/subsystemtimingconfigdata) |
| {{< prop "priorityClasses" >}} | [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TimingConstantData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TimingConstantData {#constructor-0}

> **TimingConstantData**()

Creates a new [TimingConstantData](/vext/ref/fb/timingconstantdata) frostbite instance.

### TimingConstantData {#constructor-1}

> **TimingConstantData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TimingConstantData](/vext/ref/fb/timingconstantdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### TimingConstantData {#constructor-2}

> **TimingConstantData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [TimingConstantData](/vext/ref/fb/timingconstantdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [TimingConstantData](/vext/ref/fb/timingconstantdata). |

### TimingConstantData {#constructor-3}

> **TimingConstantData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [TimingConstantData](/vext/ref/fb/timingconstantdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [TimingConstantData](/vext/ref/fb/timingconstantdata). |

## Properties

### {{% prop-heading "updateTimePerFrame" %}}

> **float**

### {{% prop-heading "subsystemTimeParts" %}}

> **[SubsystemTimingConfigData](/vext/ref/fb/subsystemtimingconfigdata)**

### {{% prop-heading "priorityClasses" %}}

> **[BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TimingConstantData](/vext/ref/fb/timingconstantdata) type.

