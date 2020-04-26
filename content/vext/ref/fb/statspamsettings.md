---
title: StatSpamSettings
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[StatSpamSettings](#constructor-0)**() |
| **[StatSpamSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[StatSpamSettings](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[StatSpamSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "spamList" >}} | [StatSpamSetting](/vext/ref/fb/statspamsetting)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "StatSpamSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### StatSpamSettings {#constructor-0}
> **StatSpamSettings**()

Creates a new [StatSpamSettings](/vext/ref/fb/statspamsettings) frostbite instance.

### StatSpamSettings {#constructor-1}
> **StatSpamSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [StatSpamSettings](/vext/ref/fb/statspamsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### StatSpamSettings {#constructor-2}
> **StatSpamSettings**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [StatSpamSettings](/vext/ref/fb/statspamsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [StatSpamSettings](/vext/ref/fb/statspamsettings). |

### StatSpamSettings {#constructor-3}
> **StatSpamSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatSpamSettings](/vext/ref/fb/statspamsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [StatSpamSettings](/vext/ref/fb/statspamsettings). |

## Properties
### {{% prop-heading "spamList" %}}
> **[StatSpamSetting](/vext/ref/fb/statspamsetting)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [StatSpamSettings](/vext/ref/fb/statspamsettings) type.

