---
title: UnlockAsset
---

Inherits from 
[UnlockAssetBase](/vext/ref/fb/unlockassetbase)

## Summary
### Constructors
| |
| ----------- |
| **[UnlockAsset](#constructor-0)**() |
| **[UnlockAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UnlockAsset](#constructor-2)**(other: [UnlockAssetBase](/vext/ref/fb/unlockassetbase)) |
| **[UnlockAsset](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UnlockAsset](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "linkedTo" >}} | [Asset](/vext/ref/fb/asset)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UnlockAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UnlockAsset {#constructor-0}
> **UnlockAsset**()

Creates a new [UnlockAsset](/vext/ref/fb/unlockasset) frostbite instance.

### UnlockAsset {#constructor-1}
> **UnlockAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UnlockAsset](/vext/ref/fb/unlockasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UnlockAsset {#constructor-2}
> **UnlockAsset**(other: [UnlockAssetBase](/vext/ref/fb/unlockassetbase))

Casts an instance of type [UnlockAssetBase](/vext/ref/fb/unlockassetbase) to [UnlockAsset](/vext/ref/fb/unlockasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UnlockAssetBase](/vext/ref/fb/unlockassetbase) | The instance to cast to [UnlockAsset](/vext/ref/fb/unlockasset). |

### UnlockAsset {#constructor-3}
> **UnlockAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UnlockAsset](/vext/ref/fb/unlockasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UnlockAsset](/vext/ref/fb/unlockasset). |

### UnlockAsset {#constructor-4}
> **UnlockAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UnlockAsset](/vext/ref/fb/unlockasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UnlockAsset](/vext/ref/fb/unlockasset). |

## Properties
### {{% prop-heading "linkedTo" %}}
> **[Asset](/vext/ref/fb/asset)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UnlockAsset](/vext/ref/fb/unlockasset) type.

