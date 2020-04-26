---
title: PerformanceTrackerSettings
---

Inherits from [SystemSettings](/vext/ref/fb/systemsettings)

## Summary

### Constructors

|  |
| --- |
| **[PerformanceTrackerSettings](#constructor-0)**() |
| **[PerformanceTrackerSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PerformanceTrackerSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[PerformanceTrackerSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "interval" >}} | float |
| {{< prop "enabled" >}} | bool |
| {{< prop "supressPerformanceStatsOnIdle" >}} | bool |
| {{< prop "supressPerformanceStatsUntilSpawned" >}} | bool |
| {{< prop "juiceLogPerformance" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PerformanceTrackerSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PerformanceTrackerSettings {#constructor-0}

> **PerformanceTrackerSettings**()

Creates a new [PerformanceTrackerSettings](/vext/ref/fb/performancetrackersettings) frostbite instance.

### PerformanceTrackerSettings {#constructor-1}

> **PerformanceTrackerSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PerformanceTrackerSettings](/vext/ref/fb/performancetrackersettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PerformanceTrackerSettings {#constructor-2}

> **PerformanceTrackerSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [PerformanceTrackerSettings](/vext/ref/fb/performancetrackersettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [PerformanceTrackerSettings](/vext/ref/fb/performancetrackersettings). |

### PerformanceTrackerSettings {#constructor-3}

> **PerformanceTrackerSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PerformanceTrackerSettings](/vext/ref/fb/performancetrackersettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PerformanceTrackerSettings](/vext/ref/fb/performancetrackersettings). |

## Properties

### {{% prop-heading "interval" %}}

> **float**

### {{% prop-heading "enabled" %}}

> **bool**

### {{% prop-heading "supressPerformanceStatsOnIdle" %}}

> **bool**

### {{% prop-heading "supressPerformanceStatsUntilSpawned" %}}

> **bool**

### {{% prop-heading "juiceLogPerformance" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PerformanceTrackerSettings](/vext/ref/fb/performancetrackersettings) type.

