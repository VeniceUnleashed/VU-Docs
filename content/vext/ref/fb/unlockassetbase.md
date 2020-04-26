---
title: UnlockAssetBase
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[UnlockAssetBase](#constructor-0)**() |
| **[UnlockAssetBase](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UnlockAssetBase](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UnlockAssetBase](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "unlockScore" >}} | int |
| {{< prop "unlockUserData" >}} | [UnlockUserDataBase](/vext/ref/fb/unlockuserdatabase) \| nil |
| {{< prop "debugUnlockId" >}} | string |
| {{< prop "identifier" >}} | int |
| {{< prop "availableForPlayer" >}} | [UnlockAvailability](/vext/ref/fb/unlockavailability) |
| {{< prop "nextLevelUnlockAsset" >}} | [UnlockAssetBase](/vext/ref/fb/unlockassetbase) \| nil |
| {{< prop "autoAvailable" >}} | bool |
| {{< prop "hiddenInProgression" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UnlockAssetBase" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UnlockAssetBase {#constructor-0}
> **UnlockAssetBase**()

Creates a new [UnlockAssetBase](/vext/ref/fb/unlockassetbase) frostbite instance.

### UnlockAssetBase {#constructor-1}
> **UnlockAssetBase**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UnlockAssetBase](/vext/ref/fb/unlockassetbase) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UnlockAssetBase {#constructor-2}
> **UnlockAssetBase**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UnlockAssetBase](/vext/ref/fb/unlockassetbase). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UnlockAssetBase](/vext/ref/fb/unlockassetbase). |

### UnlockAssetBase {#constructor-3}
> **UnlockAssetBase**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UnlockAssetBase](/vext/ref/fb/unlockassetbase). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UnlockAssetBase](/vext/ref/fb/unlockassetbase). |

## Properties
### {{% prop-heading "unlockScore" %}}
> **int**

### {{% prop-heading "unlockUserData" %}}
> **[UnlockUserDataBase](/vext/ref/fb/unlockuserdatabase)** | **nil**

### {{% prop-heading "debugUnlockId" %}}
> **string**

### {{% prop-heading "identifier" %}}
> **int**

### {{% prop-heading "availableForPlayer" %}}
> **[UnlockAvailability](/vext/ref/fb/unlockavailability)**

### {{% prop-heading "nextLevelUnlockAsset" %}}
> **[UnlockAssetBase](/vext/ref/fb/unlockassetbase)** | **nil**

### {{% prop-heading "autoAvailable" %}}
> **bool**

### {{% prop-heading "hiddenInProgression" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UnlockAssetBase](/vext/ref/fb/unlockassetbase) type.

