---
title: DebugComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[DebugComponentData](#constructor-0)**() |
| **[DebugComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DebugComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[DebugComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DebugComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DebugComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "debugTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "fullscreen" >}} | bool |
| {{< prop "enable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DebugComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DebugComponentData {#constructor-0}
> **DebugComponentData**()

Creates a new [DebugComponentData](/vext/ref/fb/debugcomponentdata) frostbite instance.

### DebugComponentData {#constructor-1}
> **DebugComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DebugComponentData](/vext/ref/fb/debugcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DebugComponentData {#constructor-2}
> **DebugComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [DebugComponentData](/vext/ref/fb/debugcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [DebugComponentData](/vext/ref/fb/debugcomponentdata). |

### DebugComponentData {#constructor-3}
> **DebugComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DebugComponentData](/vext/ref/fb/debugcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DebugComponentData](/vext/ref/fb/debugcomponentdata). |

### DebugComponentData {#constructor-4}
> **DebugComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DebugComponentData](/vext/ref/fb/debugcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DebugComponentData](/vext/ref/fb/debugcomponentdata). |

### DebugComponentData {#constructor-5}
> **DebugComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebugComponentData](/vext/ref/fb/debugcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DebugComponentData](/vext/ref/fb/debugcomponentdata). |

## Properties
### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "debugTexture" %}}
> **[TextureAsset](/vext/ref/fb/textureasset)** | **nil**

### {{% prop-heading "fullscreen" %}}
> **bool**

### {{% prop-heading "enable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DebugComponentData](/vext/ref/fb/debugcomponentdata) type.

