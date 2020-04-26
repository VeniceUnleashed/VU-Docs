---
title: SubtitleMainDataNode
---

Inherits from 
[TreeNodeBase](/vext/ref/fb/treenodebase)

## Summary
### Constructors
| |
| ----------- |
| **[SubtitleMainDataNode](#constructor-0)**() |
| **[SubtitleMainDataNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SubtitleMainDataNode](#constructor-2)**(other: [TreeNodeBase](/vext/ref/fb/treenodebase)) |
| **[SubtitleMainDataNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "language" >}} | [LanguageFormat](/vext/ref/fb/languageformat) |
| {{< prop "subtitles" >}} | [SubtitleDataNode](/vext/ref/fb/subtitledatanode)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SubtitleMainDataNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SubtitleMainDataNode {#constructor-0}
> **SubtitleMainDataNode**()

Creates a new [SubtitleMainDataNode](/vext/ref/fb/subtitlemaindatanode) frostbite instance.

### SubtitleMainDataNode {#constructor-1}
> **SubtitleMainDataNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SubtitleMainDataNode](/vext/ref/fb/subtitlemaindatanode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SubtitleMainDataNode {#constructor-2}
> **SubtitleMainDataNode**(other: [TreeNodeBase](/vext/ref/fb/treenodebase))

Casts an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase) to [SubtitleMainDataNode](/vext/ref/fb/subtitlemaindatanode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TreeNodeBase](/vext/ref/fb/treenodebase) | The instance to cast to [SubtitleMainDataNode](/vext/ref/fb/subtitlemaindatanode). |

### SubtitleMainDataNode {#constructor-3}
> **SubtitleMainDataNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SubtitleMainDataNode](/vext/ref/fb/subtitlemaindatanode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SubtitleMainDataNode](/vext/ref/fb/subtitlemaindatanode). |

## Properties
### {{% prop-heading "language" %}}
> **[LanguageFormat](/vext/ref/fb/languageformat)**

### {{% prop-heading "subtitles" %}}
> **[SubtitleDataNode](/vext/ref/fb/subtitledatanode)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SubtitleMainDataNode](/vext/ref/fb/subtitlemaindatanode) type.

