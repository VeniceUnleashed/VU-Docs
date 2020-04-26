---
title: SoldierEmoteNetworkedMessageMapping
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[SoldierEmoteNetworkedMessageMapping](#constructor-0)**() |
| **[SoldierEmoteNetworkedMessageMapping](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoldierEmoteNetworkedMessageMapping](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "emote" >}} | [SoldierEmote](/vext/ref/fb/soldieremote) |
| {{< prop "messages" >}} | [UIMessageType](/vext/ref/fb/uimessagetype)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoldierEmoteNetworkedMessageMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoldierEmoteNetworkedMessageMapping {#constructor-0}
> **SoldierEmoteNetworkedMessageMapping**()

Creates a new [SoldierEmoteNetworkedMessageMapping](/vext/ref/fb/soldieremotenetworkedmessagemapping) frostbite instance.

### SoldierEmoteNetworkedMessageMapping {#constructor-1}
> **SoldierEmoteNetworkedMessageMapping**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoldierEmoteNetworkedMessageMapping](/vext/ref/fb/soldieremotenetworkedmessagemapping) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoldierEmoteNetworkedMessageMapping {#constructor-2}
> **SoldierEmoteNetworkedMessageMapping**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierEmoteNetworkedMessageMapping](/vext/ref/fb/soldieremotenetworkedmessagemapping). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoldierEmoteNetworkedMessageMapping](/vext/ref/fb/soldieremotenetworkedmessagemapping). |

## Properties
### {{% prop-heading "emote" %}}
> **[SoldierEmote](/vext/ref/fb/soldieremote)**

### {{% prop-heading "messages" %}}
> **[UIMessageType](/vext/ref/fb/uimessagetype)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoldierEmoteNetworkedMessageMapping](/vext/ref/fb/soldieremotenetworkedmessagemapping) type.

