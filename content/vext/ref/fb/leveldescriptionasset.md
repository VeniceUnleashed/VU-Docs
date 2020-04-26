---
title: LevelDescriptionAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[LevelDescriptionAsset](#constructor-0)**() |
| **[LevelDescriptionAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[LevelDescriptionAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[LevelDescriptionAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "levelName" >}} | string |
| {{< prop "categories" >}} | [LevelDescriptionInclusionCategory](/vext/ref/fb/leveldescriptioninclusioncategory)[] |
| {{< prop "description" >}} | [LevelDescription](/vext/ref/fb/leveldescription) |
| {{< prop "startPoints" >}} | string[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LevelDescriptionAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LevelDescriptionAsset {#constructor-0}
> **LevelDescriptionAsset**()

Creates a new [LevelDescriptionAsset](/vext/ref/fb/leveldescriptionasset) frostbite instance.

### LevelDescriptionAsset {#constructor-1}
> **LevelDescriptionAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [LevelDescriptionAsset](/vext/ref/fb/leveldescriptionasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### LevelDescriptionAsset {#constructor-2}
> **LevelDescriptionAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [LevelDescriptionAsset](/vext/ref/fb/leveldescriptionasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [LevelDescriptionAsset](/vext/ref/fb/leveldescriptionasset). |

### LevelDescriptionAsset {#constructor-3}
> **LevelDescriptionAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LevelDescriptionAsset](/vext/ref/fb/leveldescriptionasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [LevelDescriptionAsset](/vext/ref/fb/leveldescriptionasset). |

## Properties
### {{% prop-heading "levelName" %}}
> **string**

### {{% prop-heading "categories" %}}
> **[LevelDescriptionInclusionCategory](/vext/ref/fb/leveldescriptioninclusioncategory)**[]

### {{% prop-heading "description" %}}
> **[LevelDescription](/vext/ref/fb/leveldescription)**

### {{% prop-heading "startPoints" %}}
> **string**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LevelDescriptionAsset](/vext/ref/fb/leveldescriptionasset) type.

