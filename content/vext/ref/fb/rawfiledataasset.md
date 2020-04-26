---
title: RawFileDataAsset
---

Inherits from 
[RawFileAsset](/vext/ref/fb/rawfileasset)

## Summary
### Constructors
| |
| ----------- |
| **[RawFileDataAsset](#constructor-0)**() |
| **[RawFileDataAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RawFileDataAsset](#constructor-2)**(other: [RawFileAsset](/vext/ref/fb/rawfileasset)) |
| **[RawFileDataAsset](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[RawFileDataAsset](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "rawData" >}} | int[] |
| {{< prop "size" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RawFileDataAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RawFileDataAsset {#constructor-0}
> **RawFileDataAsset**()

Creates a new [RawFileDataAsset](/vext/ref/fb/rawfiledataasset) frostbite instance.

### RawFileDataAsset {#constructor-1}
> **RawFileDataAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RawFileDataAsset](/vext/ref/fb/rawfiledataasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RawFileDataAsset {#constructor-2}
> **RawFileDataAsset**(other: [RawFileAsset](/vext/ref/fb/rawfileasset))

Casts an instance of type [RawFileAsset](/vext/ref/fb/rawfileasset) to [RawFileDataAsset](/vext/ref/fb/rawfiledataasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [RawFileAsset](/vext/ref/fb/rawfileasset) | The instance to cast to [RawFileDataAsset](/vext/ref/fb/rawfiledataasset). |

### RawFileDataAsset {#constructor-3}
> **RawFileDataAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [RawFileDataAsset](/vext/ref/fb/rawfiledataasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [RawFileDataAsset](/vext/ref/fb/rawfiledataasset). |

### RawFileDataAsset {#constructor-4}
> **RawFileDataAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RawFileDataAsset](/vext/ref/fb/rawfiledataasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RawFileDataAsset](/vext/ref/fb/rawfiledataasset). |

## Properties
### {{% prop-heading "rawData" %}}
> **int**[]

### {{% prop-heading "size" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RawFileDataAsset](/vext/ref/fb/rawfiledataasset) type.

