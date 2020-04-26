---
title: DemoSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[DemoSettings](#constructor-0)**() |
| **[DemoSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DemoSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "recordDemoFileName" >}} | string |
| {{< prop "playbackDemoFileName" >}} | string |
| {{< prop "timeDemo" >}} | string |
| {{< prop "lockToPlayerName" >}} | string |
| {{< prop "changePlayerInterval" >}} | int |
| {{< prop "forcedDeltaTickCount" >}} | int |
| {{< prop "startProfilingOnFrame" >}} | int |
| {{< prop "stopProfilingOnFrame" >}} | int |
| {{< prop "takeScreenshotOnFrame" >}} | int |
| {{< prop "allowOverwrite" >}} | bool |
| {{< prop "logPerformance" >}} | bool |
| {{< prop "suppressDebugLog" >}} | bool |
| {{< prop "shutdownOnDemoComplete" >}} | bool |
| {{< prop "loopingDemo" >}} | bool |
| {{< prop "lockToRandomPlayer" >}} | bool |
| {{< prop "pauseOnStartup" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DemoSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DemoSettings {#constructor-0}

> **DemoSettings**()

Creates a new [DemoSettings](/vext/ref/fb/demosettings) frostbite instance.

### DemoSettings {#constructor-1}

> **DemoSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DemoSettings](/vext/ref/fb/demosettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DemoSettings {#constructor-2}

> **DemoSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DemoSettings](/vext/ref/fb/demosettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DemoSettings](/vext/ref/fb/demosettings). |

## Properties

### {{% prop-heading "recordDemoFileName" %}}

> **string**

### {{% prop-heading "playbackDemoFileName" %}}

> **string**

### {{% prop-heading "timeDemo" %}}

> **string**

### {{% prop-heading "lockToPlayerName" %}}

> **string**

### {{% prop-heading "changePlayerInterval" %}}

> **int**

### {{% prop-heading "forcedDeltaTickCount" %}}

> **int**

### {{% prop-heading "startProfilingOnFrame" %}}

> **int**

### {{% prop-heading "stopProfilingOnFrame" %}}

> **int**

### {{% prop-heading "takeScreenshotOnFrame" %}}

> **int**

### {{% prop-heading "allowOverwrite" %}}

> **bool**

### {{% prop-heading "logPerformance" %}}

> **bool**

### {{% prop-heading "suppressDebugLog" %}}

> **bool**

### {{% prop-heading "shutdownOnDemoComplete" %}}

> **bool**

### {{% prop-heading "loopingDemo" %}}

> **bool**

### {{% prop-heading "lockToRandomPlayer" %}}

> **bool**

### {{% prop-heading "pauseOnStartup" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DemoSettings](/vext/ref/fb/demosettings) type.

