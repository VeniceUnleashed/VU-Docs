---
title: UICoopLevelDescription
---

Inherits from 
[LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent)

## Summary
### Constructors
| |
| ----------- |
| **[UICoopLevelDescription](#constructor-0)**() |
| **[UICoopLevelDescription](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UICoopLevelDescription](#constructor-2)**(other: [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent)) |
| **[UICoopLevelDescription](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "debriefing" >}} | string |
| {{< prop "devTime" >}} | int |
| {{< prop "unlockedByLevels" >}} | string[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UICoopLevelDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UICoopLevelDescription {#constructor-0}
> **UICoopLevelDescription**()

Creates a new [UICoopLevelDescription](/vext/ref/fb/uicoopleveldescription) frostbite instance.

### UICoopLevelDescription {#constructor-1}
> **UICoopLevelDescription**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UICoopLevelDescription](/vext/ref/fb/uicoopleveldescription) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UICoopLevelDescription {#constructor-2}
> **UICoopLevelDescription**(other: [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent))

Casts an instance of type [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent) to [UICoopLevelDescription](/vext/ref/fb/uicoopleveldescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent) | The instance to cast to [UICoopLevelDescription](/vext/ref/fb/uicoopleveldescription). |

### UICoopLevelDescription {#constructor-3}
> **UICoopLevelDescription**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICoopLevelDescription](/vext/ref/fb/uicoopleveldescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UICoopLevelDescription](/vext/ref/fb/uicoopleveldescription). |

## Properties
### {{% prop-heading "debriefing" %}}
> **string**

### {{% prop-heading "devTime" %}}
> **int**

### {{% prop-heading "unlockedByLevels" %}}
> **string**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UICoopLevelDescription](/vext/ref/fb/uicoopleveldescription) type.

