---
title: EntitySettings
---

Inherits from 
[SystemSettings](/vext/ref/fb/systemsettings)

## Summary
### Constructors
| |
| ----------- |
| **[EntitySettings](#constructor-0)**() |
| **[EntitySettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EntitySettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[EntitySettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "outOfEntityBusNetworkIdThreshold" >}} | int |
| {{< prop "executionMode" >}} | [ExecutionModeType](/vext/ref/fb/executionmodetype) |
| {{< prop "spawnSubLevelsFromLogic" >}} | bool |
| {{< prop "editorGameViewEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EntitySettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EntitySettings {#constructor-0}
> **EntitySettings**()

Creates a new [EntitySettings](/vext/ref/fb/entitysettings) frostbite instance.

### EntitySettings {#constructor-1}
> **EntitySettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EntitySettings](/vext/ref/fb/entitysettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EntitySettings {#constructor-2}
> **EntitySettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [EntitySettings](/vext/ref/fb/entitysettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [EntitySettings](/vext/ref/fb/entitysettings). |

### EntitySettings {#constructor-3}
> **EntitySettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntitySettings](/vext/ref/fb/entitysettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EntitySettings](/vext/ref/fb/entitysettings). |

## Properties
### {{% prop-heading "outOfEntityBusNetworkIdThreshold" %}}
> **int**

### {{% prop-heading "executionMode" %}}
> **[ExecutionModeType](/vext/ref/fb/executionmodetype)**

### {{% prop-heading "spawnSubLevelsFromLogic" %}}
> **bool**

### {{% prop-heading "editorGameViewEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EntitySettings](/vext/ref/fb/entitysettings) type.

