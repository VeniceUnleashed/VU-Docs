---
title: HavokAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[HavokAsset](#constructor-0)**() |
| **[HavokAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[HavokAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[HavokAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "scale" >}} | float |
| {{< prop "externalAssets" >}} | [DataContainer](/vext/ref/shared/class/datacontainer)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "HavokAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### HavokAsset {#constructor-0}
> **HavokAsset**()

Creates a new [HavokAsset](/vext/ref/fb/havokasset) frostbite instance.

### HavokAsset {#constructor-1}
> **HavokAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [HavokAsset](/vext/ref/fb/havokasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### HavokAsset {#constructor-2}
> **HavokAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [HavokAsset](/vext/ref/fb/havokasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [HavokAsset](/vext/ref/fb/havokasset). |

### HavokAsset {#constructor-3}
> **HavokAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HavokAsset](/vext/ref/fb/havokasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [HavokAsset](/vext/ref/fb/havokasset). |

## Properties
### {{% prop-heading "scale" %}}
> **float**

### {{% prop-heading "externalAssets" %}}
> **[DataContainer](/vext/ref/shared/class/datacontainer)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [HavokAsset](/vext/ref/fb/havokasset) type.

