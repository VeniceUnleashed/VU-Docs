---
title: GameTimeSettings
---

Inherits from 
[SystemSettings](/vext/ref/fb/systemsettings)

## Summary
### Constructors
| |
| ----------- |
| **[GameTimeSettings](#constructor-0)**() |
| **[GameTimeSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[GameTimeSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[GameTimeSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "vSyncSubtractTime" >}} | float |
| {{< prop "joinJobsTimeLimit" >}} | float |
| {{< prop "yieldTimeLimit" >}} | float |
| {{< prop "yieldTime" >}} | int |
| {{< prop "maxInactiveVariableFps" >}} | float |
| {{< prop "maxSimFps" >}} | float |
| {{< prop "maxVariableFps" >}} | float |
| {{< prop "clampTicks" >}} | int |
| {{< prop "forceDeltaTime" >}} | float |
| {{< prop "forceDeltaTickCount" >}} | int |
| {{< prop "timeScale" >}} | float |
| {{< prop "useWaitableTimers" >}} | bool |
| {{< prop "forceUseSleepTimer" >}} | bool |
| {{< prop "forceSinglePlayerFixedTick" >}} | bool |
| {{< prop "forceMultiplayerOneTickMin" >}} | bool |
| {{< prop "variableSimTickTimeEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GameTimeSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GameTimeSettings {#constructor-0}
> **GameTimeSettings**()

Creates a new [GameTimeSettings](/vext/ref/fb/gametimesettings) frostbite instance.

### GameTimeSettings {#constructor-1}
> **GameTimeSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [GameTimeSettings](/vext/ref/fb/gametimesettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### GameTimeSettings {#constructor-2}
> **GameTimeSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [GameTimeSettings](/vext/ref/fb/gametimesettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [GameTimeSettings](/vext/ref/fb/gametimesettings). |

### GameTimeSettings {#constructor-3}
> **GameTimeSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameTimeSettings](/vext/ref/fb/gametimesettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [GameTimeSettings](/vext/ref/fb/gametimesettings). |

## Properties
### {{% prop-heading "vSyncSubtractTime" %}}
> **float**

### {{% prop-heading "joinJobsTimeLimit" %}}
> **float**

### {{% prop-heading "yieldTimeLimit" %}}
> **float**

### {{% prop-heading "yieldTime" %}}
> **int**

### {{% prop-heading "maxInactiveVariableFps" %}}
> **float**

### {{% prop-heading "maxSimFps" %}}
> **float**

### {{% prop-heading "maxVariableFps" %}}
> **float**

### {{% prop-heading "clampTicks" %}}
> **int**

### {{% prop-heading "forceDeltaTime" %}}
> **float**

### {{% prop-heading "forceDeltaTickCount" %}}
> **int**

### {{% prop-heading "timeScale" %}}
> **float**

### {{% prop-heading "useWaitableTimers" %}}
> **bool**

### {{% prop-heading "forceUseSleepTimer" %}}
> **bool**

### {{% prop-heading "forceSinglePlayerFixedTick" %}}
> **bool**

### {{% prop-heading "forceMultiplayerOneTickMin" %}}
> **bool**

### {{% prop-heading "variableSimTickTimeEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GameTimeSettings](/vext/ref/fb/gametimesettings) type.

