---
title: SubtitleDataTree
---

Inherits from [TreeBase](/vext/ref/fb/treebase)

## Summary

### Constructors

|  |
| --- |
| **[SubtitleDataTree](#constructor-0)**() |
| **[SubtitleDataTree](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SubtitleDataTree](#constructor-2)**(other: [TreeBase](/vext/ref/fb/treebase)) |
| **[SubtitleDataTree](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SubtitleDataTree](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "subtitles" >}} | [SubtitleMainDataNode](/vext/ref/fb/subtitlemaindatanode)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SubtitleDataTree" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SubtitleDataTree {#constructor-0}

> **SubtitleDataTree**()

Creates a new [SubtitleDataTree](/vext/ref/fb/subtitledatatree) frostbite instance.

### SubtitleDataTree {#constructor-1}

> **SubtitleDataTree**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SubtitleDataTree](/vext/ref/fb/subtitledatatree) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SubtitleDataTree {#constructor-2}

> **SubtitleDataTree**(other: [TreeBase](/vext/ref/fb/treebase))

Casts an instance of type [TreeBase](/vext/ref/fb/treebase) to [SubtitleDataTree](/vext/ref/fb/subtitledatatree). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TreeBase](/vext/ref/fb/treebase) | The instance to cast to [SubtitleDataTree](/vext/ref/fb/subtitledatatree). |

### SubtitleDataTree {#constructor-3}

> **SubtitleDataTree**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SubtitleDataTree](/vext/ref/fb/subtitledatatree). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SubtitleDataTree](/vext/ref/fb/subtitledatatree). |

### SubtitleDataTree {#constructor-4}

> **SubtitleDataTree**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SubtitleDataTree](/vext/ref/fb/subtitledatatree). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SubtitleDataTree](/vext/ref/fb/subtitledatatree). |

## Properties

### {{% prop-heading "subtitles" %}}

> **[SubtitleMainDataNode](/vext/ref/fb/subtitlemaindatanode)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SubtitleDataTree](/vext/ref/fb/subtitledatatree) type.

