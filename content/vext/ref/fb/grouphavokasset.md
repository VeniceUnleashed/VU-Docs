---
title: GroupHavokAsset
---

Inherits from 
[HavokAsset](/vext/ref/fb/havokasset)

## Summary
### Constructors
| |
| ----------- |
| **[GroupHavokAsset](#constructor-0)**() |
| **[GroupHavokAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[GroupHavokAsset](#constructor-2)**(other: [HavokAsset](/vext/ref/fb/havokasset)) |
| **[GroupHavokAsset](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[GroupHavokAsset](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "aabb" >}} | [AssetAabbs](/vext/ref/fb/assetaabbs)[] |
| {{< prop "externalAssetScaleIndex" >}} | int[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GroupHavokAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GroupHavokAsset {#constructor-0}
> **GroupHavokAsset**()

Creates a new [GroupHavokAsset](/vext/ref/fb/grouphavokasset) frostbite instance.

### GroupHavokAsset {#constructor-1}
> **GroupHavokAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [GroupHavokAsset](/vext/ref/fb/grouphavokasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### GroupHavokAsset {#constructor-2}
> **GroupHavokAsset**(other: [HavokAsset](/vext/ref/fb/havokasset))

Casts an instance of type [HavokAsset](/vext/ref/fb/havokasset) to [GroupHavokAsset](/vext/ref/fb/grouphavokasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [HavokAsset](/vext/ref/fb/havokasset) | The instance to cast to [GroupHavokAsset](/vext/ref/fb/grouphavokasset). |

### GroupHavokAsset {#constructor-3}
> **GroupHavokAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [GroupHavokAsset](/vext/ref/fb/grouphavokasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [GroupHavokAsset](/vext/ref/fb/grouphavokasset). |

### GroupHavokAsset {#constructor-4}
> **GroupHavokAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GroupHavokAsset](/vext/ref/fb/grouphavokasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [GroupHavokAsset](/vext/ref/fb/grouphavokasset). |

## Properties
### {{% prop-heading "aabb" %}}
> **[AssetAabbs](/vext/ref/fb/assetaabbs)**[]

### {{% prop-heading "externalAssetScaleIndex" %}}
> **int**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GroupHavokAsset](/vext/ref/fb/grouphavokasset) type.

