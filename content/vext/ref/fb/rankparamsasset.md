---
title: RankParamsAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[RankParamsAsset](#constructor-0)**() |
| **[RankParamsAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RankParamsAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[RankParamsAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "ranks" >}} | [RankLevelData](/vext/ref/fb/rankleveldata)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RankParamsAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RankParamsAsset {#constructor-0}
> **RankParamsAsset**()

Creates a new [RankParamsAsset](/vext/ref/fb/rankparamsasset) frostbite instance.

### RankParamsAsset {#constructor-1}
> **RankParamsAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RankParamsAsset](/vext/ref/fb/rankparamsasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RankParamsAsset {#constructor-2}
> **RankParamsAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [RankParamsAsset](/vext/ref/fb/rankparamsasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [RankParamsAsset](/vext/ref/fb/rankparamsasset). |

### RankParamsAsset {#constructor-3}
> **RankParamsAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RankParamsAsset](/vext/ref/fb/rankparamsasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RankParamsAsset](/vext/ref/fb/rankparamsasset). |

## Properties
### {{% prop-heading "ranks" %}}
> **[RankLevelData](/vext/ref/fb/rankleveldata)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RankParamsAsset](/vext/ref/fb/rankparamsasset) type.

