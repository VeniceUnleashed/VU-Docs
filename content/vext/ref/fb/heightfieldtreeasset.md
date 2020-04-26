---
title: HeightfieldTreeAsset
---

Inherits from 
[RasterTreeAsset](/vext/ref/fb/rastertreeasset)

## Summary
### Constructors
| |
| ----------- |
| **[HeightfieldTreeAsset](#constructor-0)**() |
| **[HeightfieldTreeAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[HeightfieldTreeAsset](#constructor-2)**(other: [RasterTreeAsset](/vext/ref/fb/rastertreeasset)) |
| **[HeightfieldTreeAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minHeightWidth" >}} | float |
| {{< prop "minHeightSamplesPerSide" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "HeightfieldTreeAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### HeightfieldTreeAsset {#constructor-0}
> **HeightfieldTreeAsset**()

Creates a new [HeightfieldTreeAsset](/vext/ref/fb/heightfieldtreeasset) frostbite instance.

### HeightfieldTreeAsset {#constructor-1}
> **HeightfieldTreeAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [HeightfieldTreeAsset](/vext/ref/fb/heightfieldtreeasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### HeightfieldTreeAsset {#constructor-2}
> **HeightfieldTreeAsset**(other: [RasterTreeAsset](/vext/ref/fb/rastertreeasset))

Casts an instance of type [RasterTreeAsset](/vext/ref/fb/rastertreeasset) to [HeightfieldTreeAsset](/vext/ref/fb/heightfieldtreeasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [RasterTreeAsset](/vext/ref/fb/rastertreeasset) | The instance to cast to [HeightfieldTreeAsset](/vext/ref/fb/heightfieldtreeasset). |

### HeightfieldTreeAsset {#constructor-3}
> **HeightfieldTreeAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HeightfieldTreeAsset](/vext/ref/fb/heightfieldtreeasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [HeightfieldTreeAsset](/vext/ref/fb/heightfieldtreeasset). |

## Properties
### {{% prop-heading "minHeightWidth" %}}
> **float**

### {{% prop-heading "minHeightSamplesPerSide" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [HeightfieldTreeAsset](/vext/ref/fb/heightfieldtreeasset) type.

