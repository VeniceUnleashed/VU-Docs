---
title: ValueUnlockAsset
---

Inherits from 
[UnlockAssetBase](/vext/ref/fb/unlockassetbase)

## Summary
### Constructors
| |
| ----------- |
| **[ValueUnlockAsset](#constructor-0)**() |
| **[ValueUnlockAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ValueUnlockAsset](#constructor-2)**(other: [UnlockAssetBase](/vext/ref/fb/unlockassetbase)) |
| **[ValueUnlockAsset](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[ValueUnlockAsset](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "unlockValues" >}} | [UnlockValuePair](/vext/ref/fb/unlockvaluepair)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ValueUnlockAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ValueUnlockAsset {#constructor-0}
> **ValueUnlockAsset**()

Creates a new [ValueUnlockAsset](/vext/ref/fb/valueunlockasset) frostbite instance.

### ValueUnlockAsset {#constructor-1}
> **ValueUnlockAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ValueUnlockAsset](/vext/ref/fb/valueunlockasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ValueUnlockAsset {#constructor-2}
> **ValueUnlockAsset**(other: [UnlockAssetBase](/vext/ref/fb/unlockassetbase))

Casts an instance of type [UnlockAssetBase](/vext/ref/fb/unlockassetbase) to [ValueUnlockAsset](/vext/ref/fb/valueunlockasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UnlockAssetBase](/vext/ref/fb/unlockassetbase) | The instance to cast to [ValueUnlockAsset](/vext/ref/fb/valueunlockasset). |

### ValueUnlockAsset {#constructor-3}
> **ValueUnlockAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [ValueUnlockAsset](/vext/ref/fb/valueunlockasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [ValueUnlockAsset](/vext/ref/fb/valueunlockasset). |

### ValueUnlockAsset {#constructor-4}
> **ValueUnlockAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ValueUnlockAsset](/vext/ref/fb/valueunlockasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ValueUnlockAsset](/vext/ref/fb/valueunlockasset). |

## Properties
### {{% prop-heading "unlockValues" %}}
> **[UnlockValuePair](/vext/ref/fb/unlockvaluepair)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ValueUnlockAsset](/vext/ref/fb/valueunlockasset) type.

